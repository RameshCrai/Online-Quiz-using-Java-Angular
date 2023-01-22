package com.Spacecoding.AnswerquesController;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="answerquestion")
public class AnswerQuestion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long qaid;
	@Column(length=120)
	private String qatitle;
	@Column(length=1000)
	private String content;
	@Column(length=130)
	private String category;
	private String writername;
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate publishdate;
	private String ansquefile;
	private boolean isActive=true;
	
	
	public AnswerQuestion() {

	}

	

	public AnswerQuestion(Long qaid, String qatitle, String content, String writername, LocalDate publishdate,
			String ansquefile, String category, boolean isActive) {
		super();
		this.qaid = qaid;
		this.qatitle = qatitle;
		this.content = content;
		this.writername = writername;
		this.publishdate = publishdate;
		this.ansquefile = ansquefile;
		this.category = category;
		this.isActive = isActive;
	}



	public Long getQaid() {
		return qaid;
	}

	public void setQaid(Long qaid) {
		this.qaid = qaid;
	}

	public String getQatitle() {
		return qatitle;
	}

	public void setQatitle(String qatitle) {
		this.qatitle = qatitle;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getWritername() {
		return writername;
	}

	public void setWritername(String writername) {
		this.writername = writername;
	}

	public LocalDate getPublishdate() {
		return publishdate;
	}

	public void setPublishdate(LocalDate publishdate) {
		this.publishdate = publishdate;
	}

	public String getAnsquefile() {
		return ansquefile;
	}

	public void setAnsquefile(String ansquefile) {
		this.ansquefile = ansquefile;
	}



	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	
	public boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}


  
	

}
