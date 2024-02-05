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
import sys

server3_url = "http://118.217.203.44:5100/give_answer"  # 채팅

# 사용자가 입력한 문장
msg = sys.argv[1]

response_server3 = requests.post(server3_url, json={'input': msg})

if response_server3.status_code == 200:
    # server3의 응답에서 감정 정보를 가져옴
    answer = response_server3.json()
    
    # server3에서 받은 응답
    print(answer['output'])
    
else:
    print('서버3 응답 실패:', response_server3.text)
