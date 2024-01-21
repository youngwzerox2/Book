import requests
from bs4 import BeautifulSoup

url = "https://www.yes24.com/24/Category/NewProductList/001?SumGb=04&PageNumber=1"
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

            # 추출한 정보 출력 또는 저장
            print("책 이미지:", book_image)
            print("책 제목:", book_title)
            print("책 저자:", book_author)
            print("책 출판사:", publisher_element)
            print("--------")

    else:
        print("Table with id 'category_layout' not found on the page.")

else:
    print("Failed to retrieve the page. Status code:", response.status_code)
