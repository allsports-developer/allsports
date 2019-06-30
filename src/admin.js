import { observable, action } from 'mobx';
import axios from 'axios';

export default class AdminStore{
	
	@observable state = 'start'; // start, pending, done
	@observable error = null;

	// VIEW
	@observable page = 1;
	@observable viewPost = false;
	@observable id = 0;

	// Value
	@observable posts = [];

	// INPUT
	@observable title = '';
	@observable content = '';

	@observable league_name = '';
	@observable league_date = '';
	@observable league_info = '';

	@observable image = '';
	@observable video = '';

	@observable param1 = '';
	@observable param2 = '';
	@observable param3 = '';
	@observable param4 = '';
	@observable param5 = '';
	@observable param6 = '';
	@observable param7 = '';

	@action.bound
	handleChangeInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		
		if(name === "video"){
			this.video = value;
		}
	}

	@action.bound
	handlePlayerInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		
		switch(name){
			case "param1":
				this.param1 = value;
				break;
			case "param2":
				this.param2 = value;
				break;
			case "param3":
				this.param3 = value;
				break;
			case "param4":
				this.param4 = value;
				break;
			case "param5":
				this.param5 = value;
				break;
			case "param6":
				this.param6 = value;
				break;
			case "param7":
				this.param7 = value;
				break;
		}
	}
	@action.bound
	handleNoticeInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		
		if(name === "title") {
			this.title = value;
		}
		if(name === "content"){
			this.content = value;
		}
	}
	
	@action.bound
	handleLeagueInput = e =>{
		const name = e.target.name;
		const value = e.target.value;
		
		if(name === "name") {
			this.league_name = value;
		}
		if(name === "date"){
			this.league_date = value;
		}
		if(name === "info"){
			this.league_info = value;
		}
	}

	@action.bound
	handlePage = (page) => {
		this.page = page;
	};

	@action.bound
	handleViewPost = (view, id) => {
		this.viewPost = view;
		this.id = id;
	};
	
	@action.bound
	getNoticePosts = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/notice_list.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.get(URL);
			const res = await response.data;
			
			this.posts = res;
			this.state = "done";
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	deleteNoticePost = async(id) => {
		let index = window.confirm(`삭제하시겠습니까?`);
		if(!index) return null;
		
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_notice_delete.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.post(URL,{
				param1 : id
			});
			
			this.state = "done";
			this.getNoticePosts();
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	uploadNoticePost = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_notice_insert.php`;
		
		try{
			this.state = "pending";
			console.log(this.title);
			
			const response = await axios.post(URL,{
				param1 : "어드민",
				param2 : this.title,
				param3 : this.content,
			});
			
			this.state = "done";
			this.getNoticePosts();
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	getLeaguePosts = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/recent_league_list.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.get(URL);
			const res = await response.data;
			
			this.posts = res;
			this.state = "done";
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	uploadLeaguePost = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_league_insert.php`;
		
		try{
			this.state = "pending";
			
			const response = await axios.post(URL,{
				param1 : this.league_name,
				param2 : this.league_date,
				param3 : this.league_info,
			});
			
			this.state = "done";
			this.getLeaguePosts();
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	deleteLeaguePost = async(id) => {
		let index = window.confirm(`삭제하시겠습니까?`);
		if(!index) return null;
		
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_league_delete.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.post(URL,{
				param1 : id
			});
			
			this.state = "done";
			this.getLeaguePosts();
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	getNoticePosts = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/notice_list.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.get(URL);
			const res = await response.data;
			
			this.posts = res;
			this.state = "done";
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	uploadPlayer = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_player_insert.php`;
		
		try{
			this.state = "pending";
			
			if(this.param5 === "남"){
				this.param5 = 1;
			}else if(this.param5 === "여"){
				this.param5 = 2;
			}
			
			const response = await axios.post(URL,{
				param1 : this.param1,
				param2 : this.param2,
				param3 : this.param3,
				param4 : this.param4,
				param5 : this.param5,
				param6 : this.param6,
				param7 : this.param7,
			});
			
			this.state = "done";
			
			alert(`입력완료!`);	
			this.param1 = '';
			this.param2 = '';
			this.param3 = '';
			this.param4 = '';
			this.param5 = '';
			this.param6 = '';
			this.param7 = '';
			
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};

	@action.bound
	changeVideo = async() => {
		const URL = `http://allsports.raonnet.com/allsports/cors/admin_video_insert.php`;	
		
		try{
			this.state = "pending";
			
			const response = await axios.post(URL,{
				param1 : this.video
			});
			
			this.state = "done";
			
			alert(`입력완료!`);
		}catch(error){
			console.log(error.response);
			this.state = "error";
			this.error = error;
		}
	};
}