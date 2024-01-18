package com.example.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("file")
@CrossOrigin(origins = "http://118.217.203.37:3000")
public class FileController {

	// 프로필 등록	
//	@PostMapping("")
//	public String saveBoard(@RequestParam("file") MultipartFile file, User dto) {
//		
//		String originalFilename = file.getOriginalFilename();
//		System.out.println("originFilename: " + originalFilename);
//		
//		if(originalFilename != null && !originalFilename.equals("")) {
//			// 파일 첨부가 있는 경우(null도 아니고, 이름이 공백도 아님)
//			try {
//				String filename = new MD5Generator(originalFilename).toString();
//				
//				// 생성되는 폴더의 위치 확인 후 추후 변경
//				// -> static 폴더 밑으로 이동해야 사용자가 그 파일에 접근 가능
//				String savePath = System.getProperty("user.dir") + "\\files";
//				if(!new File(savePath).exists()) {
//					// 해당하는 폴더가 없으면 만들기
//					new File(savePath).mkdir();
//				}
//				
//				String filepath = savePath + "\\" + filename;
//				System.out.println("filepath: " + filepath);
//				
//				// 파일 저장하는 코드
//				file.transferTo(new File(filepath));
//				
//				// DB에 저장하는 코드
//				FileDTO fdto = new FileDTO();
//				fdto.setOriginalName(filename);
//				fdto.setFileName(filename);
//				fdto.setFilePath(filepath);
//				
//				// boardService.saveBoard(dto, fdto);
//				
//				
//			} catch (Exception ex) {
//				System.out.println("파일 업로드 실패: " + ex.getMessage());
//			}
//		} else {
//			// boardService.saveBoard(vo, null);
//		}
//		
//		return "redirect:getBoardList";
//	}
}
