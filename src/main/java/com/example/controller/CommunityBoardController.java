package com.example.controller;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.util.MD5Generator;
import com.example.domain.CommunityBoard;
import com.example.domain.FileDTO;
import com.example.userservice.UserCommunityBoardServiceImpl;

@RestController
@RequestMapping("communityBoard")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class CommunityBoardController {

    @Autowired
    private UserCommunityBoardServiceImpl communityBoardService;

    // *** SELECT ***********************************************************
    // 모든 게시글 출력
    @GetMapping("/selectAll")
    public List<CommunityBoard> selectAll() {
		try {
			System.out.println("[CommunityBoardController/selectAll] 요청");
			List<CommunityBoard> result = communityBoardService.selectAll();
			System.out.println("[CommunityBoardController/selectAll] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	// 한 명의 사용자가 작성한 모든 게시글 출력
	@GetMapping("/selectByUser")
	public List<CommunityBoard> selectByUser(@RequestParam(name = "memberId") String memberId) {
		try {
			System.out.println("[CommunityBoardController/selectByUser] 요청");
			List<CommunityBoard> result = communityBoardService.selectByUser(memberId);
			System.out.println("[CommunityBoardController/selectByUser] " + result);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// 특정 게시글 출력
	@GetMapping("/selectByNum")
	public CommunityBoard selectByNum(@RequestParam(name = "communityBoardId") String communityBoardId) {
		try {
			System.out.println("[CommunityBoardController/selectByNum] 요청");
			CommunityBoard result = communityBoardService.selectByNum(communityBoardId);
			System.out.println("[CommunityBoardController/selectByNum] " + result);
			return result;
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** INSERT ***********************************************************
	// 게시글 입력
	@PostMapping("/write")
	public Integer write(CommunityBoard dto,
						 @RequestParam("file") MultipartFile file) {
		try {
			System.out.println("[CommunityBoardController/write] 요청");

			String originalFilename = file.getOriginalFilename();
			System.out.println("originFilename: " + originalFilename);

			if(originalFilename != null && !originalFilename.equals("")) {
				// 파일 첨부가 있는 경우(null도 아니고, 이름이 공백도 아님)
				try {
					String filename = new MD5Generator(originalFilename).toString();
					
					// 생성되는 폴더의 위치 확인 후 추후 변경
					// -> static 폴더 밑으로 이동해야 사용자가 그 파일에 접근 가능
					String savePath = System.getProperty("user.dir") + "\\files";
					if(!new File(savePath).exists()) {
						// 해당하는 폴더가 없으면 만들기
						new File(savePath).mkdir();
					}
					
					String filepath = savePath + "\\" + filename;
					System.out.println("filepath: " + filepath);
					
					// 파일 저장하는 코드
					file.transferTo(new File(filepath));
					
					// DB에 저장하는 코드
					FileDTO fdto = new FileDTO();
					fdto.setOriginalName(originalFilename);
					fdto.setFileName(filename);
					fdto.setFilePath(filepath);
					fdto.setMemberId(dto.getMemberId());
					
					// file 테이블에 저장
					communityBoardService.writeFile(fdto);

					// 가장 최근의 파일 번호 가져와서 게시글 정보에 입력
					Integer fileNum = communityBoardService.getFileNum();
					dto.setCommunityBoardImg(fileNum);
					
				} catch (Exception ex) {
					System.out.println("파일 업로드 실패: " + ex.getMessage());
				}
			}

			// 게시글 저장
			Integer result = communityBoardService.write(dto);

			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** UPDATE ***********************************************************
	// 게시글 수정
	@PostMapping("/update")
	public Integer update(CommunityBoard dto) {
		try{
			System.out.println("[CommunityBoardController/update] 요청");
			Integer result = communityBoardService.update(dto);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	// *** DELETE ***********************************************************
	// 게시글 삭제
	@GetMapping("/delete")
	public Integer delete(@RequestParam(name = "communityBoardId") String communityBoardId) {
		try {
			System.out.println("[RecordController/delete] 요청");
			Integer result = communityBoardService.delete(communityBoardId);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
