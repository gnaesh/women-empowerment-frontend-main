package com.womenempowerment.model;

import java.time.LocalDate;

public class FeedBack {
	private int feedBackId;
	private int schemeRating;
	private int schemeTrainingRating;
	private int overallRating;
	private String comments;
	private	LocalDate feedbackdate;
	private User user;
	private TrainingCourse training;
	private Scheme scheme;
}
