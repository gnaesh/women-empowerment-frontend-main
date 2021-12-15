package com.womenempowerment.service;

import java.util.List;

import com.womenempowerment.model.NGO;

public interface INGOService  {
	NGO addNGO(NGO ngo);

	NGO updateNGO(NGO ngo);

	NGO viewNGO(int ngoId);

	List<NGO> viewAllNGO();

	void deleteNGO(int ngoId);

	List<NGO> viewNGOByMotive(String motive);

	List<NGO> viewNGOByLocation(String location);
}
