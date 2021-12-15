package com.womenempowerment.service;

import java.util.List;

import com.womenempowerment.model.FeedBack;

public interface IFeedBackService {
	FeedBack addFeedBack(FeedBack feedback);

	FeedBack updateFeedBack(FeedBack feedback);

	FeedBack viewFeedBack(int feedbackId);

	List<FeedBack> viewAllFeedBack();

	List<FeedBack> viewFeedBackBySchemeName();

	List<FeedBack> viewFeedBackByTrainingCourseName();
}
