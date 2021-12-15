package com.womenempowerment.service;

import java.util.List;

import com.womenempowerment.model.Trainee;

public interface ITraineeService  {
	Trainee addTrainee(Trainee course);

	Trainee updateTrainee(Trainee course);

	Trainee viewTrainee(int courseId);

	List<Trainee> viewAllTrainee();

	void deleteTrainee(int courseId);

	List<Trainee> viewAllTraineesByLocation(String location);

	Trainee viewTraineeByAadhar(long aadharNo);

}
