package com.womenempowerment.dao;

import java.util.List;

import com.womenempowerment.model.TrainingCourse;

public interface ITrainingCourseDao {
	TrainingCourse addTrainingCourse(TrainingCourse course);

	TrainingCourse updateTrainingCourse(TrainingCourse course);

	TrainingCourse viewTrainingCourse(int courseId);

	List<TrainingCourse> viewAllTrainingCourse();

	void deleteTrainingCourse(int courseId);

	void viewByTrainingCourseName(String courseName);

}
