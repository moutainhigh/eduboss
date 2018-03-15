package com.eduboss.dao.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.eduboss.dao.CustomerAppointmentDao;
import com.eduboss.dao.RefundContractProductDao;
import com.eduboss.domain.CustomerAppointment;
import com.eduboss.domain.RefundContractProduct;

/**
 * A data access object (DAO) providing persistence and search support for
 * AppUser entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see com.eduboss.domain.AppUser
 * @author MyEclipse Persistence Tools
 */
@Repository("RefundContractProductDao")
public class RefundContractProductDaoImpl extends GenericDaoImpl<RefundContractProduct, String> implements RefundContractProductDao {

	private static final Logger log = LoggerFactory.getLogger(RefundContractProductDaoImpl.class);
	// property constants
	
}
