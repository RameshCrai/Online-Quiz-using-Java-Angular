package com.Spacecoding.AnswerquesController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Spacecoding.helper.TitleFoundException;

@RestController
@CrossOrigin("*")
@RequestMapping("/answerquestion")
public class AnswerQuestionController {
	
	@Autowired
	private AnswerQuestionService answerQuestionService;
	
	
	@PostMapping("/")
	public AnswerQuestion AddAnsQue(@RequestBody AnswerQuestion answerQuestion) throws TitleFoundException {
				
		return this.answerQuestionService.addAnsQues(answerQuestion);
		
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllQA(){
		return ResponseEntity.ok(this.answerQuestionService.getAllAnsQues());
	}
	
	//delete items
	@DeleteMapping("/{qaid}")
	public void DeleteQA(@PathVariable("qaid")Long qaid) {
		this.answerQuestionService.delete(qaid);
	}
	
	//get single data 
	@GetMapping("/{qaid}")
	public AnswerQuestion SingleQA(@PathVariable("qaid") Long qaid) {
		return this.answerQuestionService.getQA(qaid);
	}
	
	//update QA
	@PutMapping("/")
	public ResponseEntity<?> updateQA(@RequestBody AnswerQuestion answerQuestion){
		
		return ResponseEntity.ok(this.answerQuestionService.updateAnsQues(answerQuestion));
		
	}
	

}
