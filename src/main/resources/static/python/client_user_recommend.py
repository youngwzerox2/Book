# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:light
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.16.1
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

import requests
import json
import sys
import re

# +
server4_url = "http://118.217.203.44:5400/user_recommend"  # 사용자 추천

# 현재 사용자의 id
# id = 'test77'
id = sys.argv[1]

# server4에 사용자 아이디를 전달하여 사용자 추천 요청
response_server4 = requests.post(server4_url, json={
    'id': id,
})

if response_server4.status_code == 200:
    # server4의 응답을 클라이언트에서 처리
    recommend_info = response_server4.json()

    # 서버2에서 받은 응답에서 추천 도서 정보 추출
    for i in range(12):
        if 'recommend{}'.format(i) in recommend_info:
            print(recommend_info["recommend{}".format(i)])

else:
    print('서버4 응답 실패:', response_server4.text)
