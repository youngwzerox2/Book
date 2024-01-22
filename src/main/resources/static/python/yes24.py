import requests
from bs4 import BeautifulSoup
import mysql.connector
from mysql.connector import Error

# MySQL 연결 설정
db_config = {
    'host': '118.217.203.37',
    'user': 'readme',
    'password': 'pwreadme',
    'database': 'readme'
}

# MySQL 연결
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# 각 페이지에서 수집한 정보를 저장할 리스트
all_books = []

for page_number in range(1, 349):
    url = f"https://www.yes24.com/24/Category/NewProductList/001?SumGb=04&PageNumber={page_number}"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # 특정 테이블 찾기
        category_table = soup.find("table", id="category_layout")

        if category_table:
            # 테이블의 각 행을 찾기
            rows = category_table.find_all("tr")

            for row in rows:
                # 행에서 각 책의 정보가 들어있는 요소 찾기
                book_image_element = row.find("div", class_="goodsImgW")

                # 각 행에서 독립적으로 책 정보 찾기
                book_info_element = row.find("td", class_="goodsTxtInfo")

                # 책 이미지
                if book_image_element:
                    book_image_tag = book_image_element.find("img")
                    book_image = book_image_tag.get("src", "") if book_image_tag else ""
                else:
                    book_image = ""

                # 책 제목
                if book_info_element:
                    book_title_tag = book_info_element.find("p")
                    book_title = book_title_tag.text.strip() if book_title_tag else ""
                else:
                    book_title = ""

                # 책 저자 및 출판사 정보가 포함된 요소 찾기
                if book_info_element:
                    author_element = book_info_element.find("div", class_="aupu").find_all("a")
                    book_author = author_element[0].text if len(author_element) > 0 else ""
                    publisher_element = author_element[1].text if len(author_element) > 1 else ""
                else:
                    book_author = ""
                    publisher_element = ""

                # isbn13 정보를 가져오기 위해 링크 접근
                book_link_element = row.find("a", class_="goodsImg")
                if book_link_element:
                    book_link = book_link_element.get("href", "")
                    isbn13_response = requests.get(f"https://www.yes24.com{book_link}")
                    isbn13_soup = BeautifulSoup(isbn13_response.text, 'html.parser')
                    isbn13_element = isbn13_soup.find("td", class_="txt lastCol")
                    isbn13 = isbn13_element.text.strip() if isbn13_element else ""
                else:
                    isbn13 = ""

                # 책 정보가 모두 존재하고 isbn13이 존재할 경우에만 데이터베이스에 삽입
                if book_image or book_title or book_author or publisher_element or isbn13:
                    book_data = {
                        'book_image': book_image,
                        'book_title': book_title,
                        'book_author': book_author,
                        'publisher': publisher_element,
                        'isbn13': isbn13
                    }

                    all_books.append(book_data)

                    try:
                        # 중복 여부 체크를 위한 SELECT 쿼리
                        select_query = "SELECT * FROM book WHERE book_isbn13 = %s"
                        select_values = (isbn13,)

                        cursor.execute(select_query, select_values)

                        # 중복된 레코드가 없다면 INSERT 수행
                        if not cursor.fetchone():
                            # SQL 쿼리 작성
                            insert_query = "INSERT INTO book (bookImageURL, bookname, authors, publisher, book_isbn13) VALUES (%s, %s, %s, %s, %s)"
                            insert_values = (book_image, book_title, book_author, publisher_element, isbn13)

                            # 쿼리 실행
                            cursor.execute(insert_query, insert_values)

                            # 변경사항 커밋
                            conn.commit()

                    except Error as e:
                        print("오류:", e)
                        # 오류가 발생한 경우 트랜잭션을 롤백할 수 있습니다.
                        conn.rollback()

        else:
            print(f"Table with id 'category_layout' not found on the page {page_number}.")

    else:
        print(f"Failed to retrieve the page {page_number}. Status code:", response.status_code)

# 연결 종료
cursor.close()
conn.close()

# 수집한 정보 출력
for book in all_books:
    print(book)
