package com.eduboss.dao.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.eduboss.dao.AppUserDao;
import com.eduboss.domain.AppUser;

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
@Repository("AppUserDao")
public class AppUserDaoImpl extends GenericDaoImpl<AppUser, String> implements AppUserDao {

	private static final Logger log = LoggerFactory.getLogger(AppUserDaoImpl.class);
	// property constants
	
}
