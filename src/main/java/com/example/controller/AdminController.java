package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.Ask;
import com.example.domain.Book;
import com.example.domain.Complain;
import com.example.domain.Notice;
import com.example.domain.RecordDTO;
import com.example.domain.User;
import com.example.service.AskService;
import com.example.service.BookService;
import com.example.service.ComplainService;
import com.example.service.FaqService;
import com.example.service.KakaoLibraryService;
import com.example.service.NoticeService;
import com.example.service.RecordService;
import com.example.service.TermsService;
import com.example.service.UserService;

@Controller
public class AdminController {

    // 회원
    @Autowired
    private UserService userService;

    // 도서
    @Autowired
    private BookService bookService;

    // 컴플레인
    @Autowired
    private ComplainService complainService;

    // 공지사항
    @Autowired
    private NoticeService noticeService;

    // FAQ
    @Autowired
    private FaqService faqService;

    // 문의
    @Autowired
    private AskService askService;

    // 이용약관
    @Autowired
    private TermsService termsService;

    // 독서기록
    @Autowired
    private RecordService recordService;

    // 회원 도서관
    @Autowired
    private KakaoLibraryService kakaoLibraryService;

    @RequestMapping("/{step}")
    public String viewPage(@PathVariable String step) {
        return step;
    }

    // *************************************** 메인 ****************************************
    // 메인
    // @RequestMapping("/index")
    // public String index() {
    // System.out.println("index.jsp호출");
    // return "index";
    // }

    // 메인
    // @RequestMapping("/")
    // public void main(Model m) {
    //     List<User> list = userService.memberList();
    //     m.addAttribute("memberList", list);
    //     System.out.println("index.jsp호출");
    // }

    // 메인 제재명단, 문의건수
    @RequestMapping("/adminmain")
    public String index(Model m) {
        List<User> user = userService.memberList();             // 제재명단
        m.addAttribute("memberList", user);
        // List<Ask> ask = askService.askCount();
        // m.addAttribute("askCount", ask);
        List<Ask> dailyAsk = askService.dailyAsk();             // 일별 문의건수
        m.addAttribute("dailyAsk", dailyAsk);
        System.out.println(dailyAsk);
        System.out.println("adminmain.jsp호출");
        return "adminmain";
    }

    // *************************************** 회원 ****************************************
    // 회원관리
    @RequestMapping("/member")
    public void memberList(Model m) {
        List<User> list = userService.memberList();
        m.addAttribute("memberList", list);
        System.out.println("member.jsp호출");
    }

    // 회원상세정보
    @RequestMapping("/memberDetail")
    public void memberDetail(Model m, User vo) {
        User member = userService.memberDetail(vo);
        System.out.println("memberDetail.jsp호출");
        m.addAttribute("member", member);
    }

    // 회원정보수정
    @RequestMapping("/updateMember")
    public String updateMember(User vo) {
        System.out.println("회원정보수정:" + vo);
        userService.updateMember(vo);
        return "redirect:member";
    }

    // 회원정보삭제
    @RequestMapping("/deleteMember")
    public String deleteMember(User vo) {
        userService.deleteMember(vo);
        return "redirect:member";
    }

    // *************************************** 도서 ****************************************
    // 도서관리
    @RequestMapping("/book")
    public void bookList(Model m) {
        List<Book> list = bookService.bookList();
        m.addAttribute("bookList", list);
        System.out.println("book.jsp호출");
    }

    // 도서상세정보
    @RequestMapping("/bookDetail")
    public void bookDetail(Model m, Book vo) {
        Book book = bookService.bookDetail(vo);
        System.out.println("bookDetail.jsp호출");
        // System.out.println("도서상세정보"+ book);
        m.addAttribute("book", book);
    }

    // 도서정보수정
    @RequestMapping("/updateBook")
    public String updateBook(Book vo) {
        System.out.println("도서정보수정:" + vo);
        bookService.updateBook(vo);
        return "redirect:book";
    }

    // 도서정보삭제
    @RequestMapping("/deleteBook")
    public String deleteBook(Book vo) {
        bookService.deleteBook(vo);
        return "redirect:book";
    }

    // *************************************** 컴플레인 ****************************************
    // 컴플레인 신고관리
    @RequestMapping("/complain")
    public void complainList(Model m) {
        List<Complain> list = complainService.complainList();
        m.addAttribute("complainList", list);
        System.out.println("complain.jsp호출");
    }

    // 컴플레인 상세정보
    @RequestMapping("/complainDetail")
    public void complainDetail(Model m, Complain vo) {
        Complain complain = complainService.complainDetail(vo);
        System.out.println("complainDetail.jsp호출");
        m.addAttribute("complain", complain);

        // 관리자 회원 ID 목록 중 member_grade가 admin인 것만 가져오기
        List<String> adminMemberIds = userService.getAdminMemberIds();
        m.addAttribute("adminMemberIds", adminMemberIds);
    }

    // 컴플레인 정보수정
    @RequestMapping("/updateComplain")
    public String updateComplain(Complain vo) {
        System.out.println("컴플레인 정보수정:" + vo);
        complainService.updateComplain(vo);
        return "redirect:complain";
    }

    // *************************************** 공지사항 ****************************************
    // 공지사항 관리
    @RequestMapping("/notice")
    public void noticeList(Model m) {
        // AdminVO vo = new AdminVO();
        List<Notice> list = noticeService.noticeList();
        m.addAttribute("noticeList", list);
        System.out.println("notice.jsp호출");
    }

    // 공지사항 상세정보
    @RequestMapping("/noticeDetail")
    public void noticeDetail(Model m, Notice vo) {
        Notice notice = noticeService.noticeDetail(vo);
        System.out.println("noticeDetail.jsp호출");
        m.addAttribute("notice", notice);
    }

    // 공지사항 정보수정
    @RequestMapping("/updateNotice")
    public String updateNotice(Notice vo) {
        System.out.println("공지사항정보수정:" + vo);
        noticeService.updateNotice(vo);
        return "redirect:notice";
    }

    // 공지사항 삭제
    @RequestMapping("/deleteNotice")
    public String deleteNotice(Notice vo) {
        noticeService.deleteNotice(vo);
        return "redirect:notice";
    }

    // 공지사항 등록
    @RequestMapping("/insertNotice")
    public void insertNotice(Model m, Notice vo) {
        noticeService.insertNotice(vo);
    }

    // *************************************** 이용약관 ****************************************
    // 이용약관 관리
    @RequestMapping("/terms")
    public void termsList(Model m) {
        List<Notice> list = termsService.termsList();
        m.addAttribute("termsList", list);
        System.out.println("terms.jsp호출");
    }

    // 이용약관 상세정보
    @RequestMapping("/termsDetail")
    public void termsDetail(Model m, Notice vo) {
        Notice terms = termsService.termsDetail(vo);
        System.out.println("termsDetail.jsp호출");
        m.addAttribute("terms", terms);
    }

    // 이용약관 정보수정
    @RequestMapping("/updateTerms")
    public String updateTerms(Notice vo) {
        System.out.println("이용약관 정보수정:" + vo);
        termsService.updateTerms(vo);
        return "redirect:terms";
    }

    // *************************************** FAQ ****************************************
    // FAQ 관리
    @RequestMapping("/faq")
    public void faqList(Model m) {
        List<Notice> list = faqService.faqList();
        m.addAttribute("faqList", list);
        System.out.println("faq.jsp호출");
    }

    // FAQ 상세정보
    @RequestMapping("/faqDetail")
    public void faqDetail(Model m, Notice vo) {
        Notice faq = faqService.faqDetail(vo);
        System.out.println("faqDetail.jsp호출");
        m.addAttribute("faq", faq);
    }

    // FAQ 정보수정
    @RequestMapping("/updateFaq")
    public String updateFaq(Notice vo) {
        System.out.println("FAQ 정보수정:" + vo);
        faqService.updateFaq(vo);
        return "redirect:faq";
    }

    // FAQ 삭제
    @RequestMapping("/deleteFaq")
    public String deleteFaq(Notice vo) {
        faqService.deleteFaq(vo);
        return "redirect:faq";
    }

    // FAQ 등록
    @RequestMapping("/insertFaq")
    public void insertFaq(Model m, Notice vo) {
        faqService.insertFaq(vo);
    }

    // *************************************** 문의 ****************************************
    // 문의 관리
    @RequestMapping("/ask")
    public String askList(Model m) {
        List<Ask> list = askService.askList();
        m.addAttribute("askList", list);
        System.out.println("ask.jsp호출");
        return "ask";
    }

    // 문의 상세정보
    @RequestMapping("/askDetail")
    public void askDetail(Model m, Ask vo) {
        Ask ask = askService.askDetail(vo);
        System.out.println("askDetail.jsp호출");
        m.addAttribute("ask", ask);

        // 관리자 회원 ID 목록 중 member_grade가 admin인 것만 가져오기
        List<String> adminMemberIds = userService.getAdminMemberIds();
        m.addAttribute("adminMemberIds", adminMemberIds);
    }

    // 문의 정보수정
    @RequestMapping("/updateAsk")
    public String updateAsk(Ask vo) {
        // System.out.println("문의 정보수정:" + vo);
        askService.updateAsk(vo);
        return "redirect:ask";
    }

    // 문의 삭제
    @RequestMapping("/deleteAsk")
    public String deleteAsk(Ask vo) {
        askService.deleteAsk(vo);
        return "redirect:ask";
    }

    // 문의 등록
    @RequestMapping("/insertAsk")
    public void insertAsk(Model m, Ask vo) {
        askService.insertAsk(vo);
    }

    // *************************************** 독서기록 ****************************************
    // 독서기록 관리
    @RequestMapping("/record")
    public void recordList(Model m) {
        List<RecordDTO> list = recordService.recordList();
        m.addAttribute("recordList", list);
        System.out.println("record.jsp호출");
    }

    // 독서기록 상세정보
    @RequestMapping("/recordDetail")
    public void recordDetail(Model m, RecordDTO vo) {
        RecordDTO record = recordService.recordDetail(vo);
        System.out.println("recordDetail.jsp호출");
        m.addAttribute("record", record);
    }

    // 독서기록 정보수정
    @RequestMapping("/updateRecord")
    public String updateRecord(RecordDTO vo) {
        System.out.println("회원정보수정:" + vo);
        recordService.updateRecord(vo);
        return "redirect:record";
    }

    // 독서기록 정보삭제
    @RequestMapping("/deleteRecord")
    public String deleteRecord(RecordDTO vo) {
        recordService.deleteRecord(vo);
        return "redirect:record";
    }

    // *************************************** 통계 ****************************************
    // 통계관리
    @RequestMapping("/charts")
    public void charts() {
        System.out.println("charts.jsp호출");
    }

    // *************************************** 관리자 도서관 ****************************************
    // 도서관관리
    @RequestMapping("/adminlibrary")
    public void adminlibrary() {
        System.out.println("adminlibrary.jsp호출");
    }

    // *************************************** 회원 도서관 ****************************************
    // 회원 도서관 위치 부르기
    // @RequestMapping("/memberlibrary")
    // public String memberlibrary(Model m) {
    //     List<KakaoLibrary> libraryLocations = kakaoLibraryService.getAllLocations();

    //     // 모델에 JSON 형식으로 데이터 추가
    //     ObjectMapper objectMapper = new ObjectMapper();
    //     String libraryLocationsJson;
    //     try {
    //         libraryLocationsJson = objectMapper.writeValueAsString(libraryLocations);
    //         // System.out.println(libraryLocationsJson);
    //     } catch (JsonProcessingException e) {
    //         // 예외 처리
    //         e.printStackTrace();
    //         libraryLocationsJson = "[]"; // 기본적으로 빈 배열로 설정
    //     }
    //     m.addAttribute("libraryLocations", libraryLocationsJson);

    //     // 각 libraryNum에 대한 외부 API 호출 및 응답 받기
    //     List<String> apiResponses = new ArrayList<>();
    //     String apiUrl = "https://data4library.kr/api/bookExist";
    //     String authKey = "9ea76f31c20ce4c02d3eeb25892c0bd248634fd7a525883db2c87e65125d07d5";
    //     String isbn13 = "8809105873012";

    //     for (KakaoLibrary library : libraryLocations) {
    //         String libCode = library.getLibraryNum(); // 또는 다른 방식으로 libraryNum을 가져와야 할 수 있음
    //         String apiResponse = callExternalApi(apiUrl, authKey, libCode, isbn13);
    //         apiResponses.add(apiResponse);

    //          // 콘솔에 API 응답 출력
    //         System.out.println("API 응답 for library " + libCode + ": " + apiResponse);
    //     }

    //     m.addAttribute("apiresponses", apiResponses);
    //     // System.out.println("apiResponses@@@@:"+ apiResponses);

    //     System.out.println("memberlibrary.jsp 호출");
    //     return "memberlibrary";
    // }

    // private String callExternalApi(String apiUrl, String authKey, String libCode, String isbn13) {
    //     // WebClient를 사용해서 외부 API 호출
    //     WebClient webClient = WebClient.create();

    //     // API 호스트 정보 추가
    //     URI uri = UriComponentsBuilder.fromHttpUrl(apiUrl)
    //             .queryParam("authKey", authKey)
    //             .queryParam("libCode", libCode)
    //             .queryParam("isbn13", isbn13)
    //             .build()
    //             .toUri();

    //     // API 호출 및 응답 받기
    //     String apiResponse = webClient.get()
    //             .uri(uri)
    //             .retrieve()
    //             .bodyToMono(String.class)
    //             .block();

    //     return apiResponse;
    // }
   
}

