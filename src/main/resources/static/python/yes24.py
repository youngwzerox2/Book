import requests
from bs4 import BeautifulSoup
import mysql.connector
import schedule
import time

# MySQL 연결 정보
db_config = {
    'host': '114.207.167.82',
    'user': 'readme',
    'password': 'pwreadme',
    'database': 'readme',
    'use_pure': True  
}

# MySQL 연결 설정
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# 도서 정보 삽입을 위한 SQL 쿼리
insert_query = """
INSERT INTO book (bookImageURL, bookname, authors, publisher, publication_year, book_isbn13)
VALUES (%s, %s, %s, %s, %s, %s)
"""

# 중복 체크를 위한 SQL 쿼리
check_query = "SELECT COUNT(*) FROM book WHERE book_isbn13 = %s"

# 도서 신상품 페이지 url
base_url = "https://www.yes24.com/Product/Category/NewProduct?categoryNumber=001&pageNumber="
# 도서 신상품 상세 페이지 url
detail_url_base = "https://www.yes24.com/Product/Goods/"

# 시작페이지
start_page = 1
# 끝페이지
end_page = 555

def collect_book_info():
    # 페이지 범위 내에서 도서 정보 수집
    for page in range(start_page, end_page + 1):
        url = base_url + str(page)
        response = requests.get(url)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            # 도서 정보
            book_info_list = soup.select('li[data-goods-no]')

            for book_info in book_info_list:
                # 도서번호
                goods_number = book_info['data-goods-no']

                # 도서 이미지
                bookImageURL_elem = book_info.select_one('em.img_bdr > img')
                bookImageURL = bookImageURL_elem['src'] if bookImageURL_elem else "-"

                # 도서 제목
                bookname_elem = book_info.select_one('em.img_bdr > img')
                bookname = bookname_elem['alt'] if bookname_elem else "-"

                # 도서 저자
                author_elem = book_info.select_one('span.authPub.info_auth > a')
                author = author_elem.text if author_elem else "-"

                # 출판사
                publisher_elem = book_info.select_one('span.authPub.info_pub > a')
                publisher = publisher_elem.text if publisher_elem else "-"

                # 출판년도
                publication_year_elem = book_info.select_one('span.authPub.info_date')
                publication_year = publication_year_elem.text if publication_year_elem else "-"

                # 도서의 상세 페이지로 이동하여 ISBN-13 정보 가져오기
                detail_url = detail_url_base + goods_number
                detail_response = requests.get(detail_url)
                
                # 상세 페이지의 HTML 파싱
                if detail_response.status_code == 200:
                    detail_soup = BeautifulSoup(detail_response.text, 'html.parser')

                    # ISBN-13 정보의 위치 확인
                    isbn13_elem_3rd = detail_soup.select_one('.b_size tr:nth-of-type(3) td')
                    isbn13_elem_4th = detail_soup.select_one('.b_size tr:nth-of-type(4) td')

                    # 텍스트가 있는지 확인 후 처리
                    def is_valid_isbn13(text):
                        return text and text.strip().isdigit() and len(text.strip()) == 13

                    # ISBN-13 정보 추출
                    if isbn13_elem_3rd and is_valid_isbn13(isbn13_elem_3rd.text):
                        book_isbn13 = isbn13_elem_3rd.text.strip()
                    elif isbn13_elem_4th and is_valid_isbn13(isbn13_elem_4th.text):
                        book_isbn13 = isbn13_elem_4th.text.strip()
                    else:
                        book_isbn13 = "-"

                    # 중복 체크 후 삽입
                    cursor.execute(check_query, (book_isbn13,))
                    count = cursor.fetchone()[0]
                    if count == 0:
                        print(f"데이터베이스에 추가 중: {bookImageURL}, {bookname}, {author}, {publisher}, {publication_year}, {book_isbn13}")
                        cursor.execute(insert_query, (bookImageURL, bookname, author, publisher, publication_year, book_isbn13))
                        conn.commit()
                        print("데이터베이스에 추가 완료!")
                    else:
                        print(f"중복된 도서번호입니다. ISBN-13: {book_isbn13}")

                else:
                    print(f"페이지 {page}를 가져오는 데 실패했습니다. 상태 코드: {response.status_code}")


    # MySQL 연결 종료
    cursor.close()
    conn.close()

# 매일 08:00에 collect_book_info 함수 실행
schedule.every().day.at("08:00").do(collect_book_info)

while True:
    schedule.run_pending()
    time.sleep(1)