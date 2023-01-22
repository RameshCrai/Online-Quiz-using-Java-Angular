package com.Spacecoding.AnswerquesController;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerQuestionRepository extends JpaRepository<AnswerQuestion, Long>{
	
	AnswerQuestion findByQatitle(String title);

}
