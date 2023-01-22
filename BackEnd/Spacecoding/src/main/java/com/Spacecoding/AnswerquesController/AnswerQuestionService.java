package com.Spacecoding.AnswerquesController;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.Spacecoding.helper.TitleFoundException;




public interface AnswerQuestionService {
	
	public AnswerQuestion addAnsQues(AnswerQuestion answerQuestion) throws TitleFoundException;
	
	public AnswerQuestion updateAnsQues(AnswerQuestion answerQuestion);
	
	public List<AnswerQuestion> getAllAnsQues();
	
	public AnswerQuestion getAnsQues(AnswerQuestion answerQuestion);
	
	public AnswerQuestion getQA(Long qaid);
	
	public void delete(Long aid);
	

}
