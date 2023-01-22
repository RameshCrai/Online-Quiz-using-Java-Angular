package com.Spacecoding.AnswerquesController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Spacecoding.helper.TitleFoundException;

@Service
public class AnswerQuestionServiceImpl implements AnswerQuestionService{

	@Autowired
	private AnswerQuestionRepository answerQuestionRepository;



	@Override
	public AnswerQuestion addAnsQues(AnswerQuestion answerQuestion)
			throws TitleFoundException {

		AnswerQuestion title = this.answerQuestionRepository.findByQatitle(answerQuestion.getQatitle());
		if(title != null) {
			System.out.println("this type of question is already there !!");
			throw new TitleFoundException("same title is Already over there  ???");
		}else {
			title = this.answerQuestionRepository.save(answerQuestion);			

		}

		return title;
	}


	@Override
	public AnswerQuestion updateAnsQues(AnswerQuestion answerQuestion) {

		return this.answerQuestionRepository.save(answerQuestion);
	}



	@Override
	public List<AnswerQuestion> getAllAnsQues() {

		return new LinkedList<AnswerQuestion>( this.answerQuestionRepository.findAll());
	}

	@Override
	public AnswerQuestion getAnsQues(AnswerQuestion answerQuestion) {

		return (AnswerQuestion) this.answerQuestionRepository.findAll();
	}

	@Override
	public void delete(Long aid) {
		this.answerQuestionRepository.deleteById(aid);

	}



	@Override
	public AnswerQuestion getQA(Long qaid) {

		return this.answerQuestionRepository.findById(qaid).get();
	}

}
