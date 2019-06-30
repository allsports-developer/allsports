import React from 'react';
import { Link } from 'react-router-dom';

// SCSS
import './Header.scss';

const Header = ({page}) => {
	return(
		<div className = "Header">
			<p className = "title">
				AllSports Admin
			</p>
			
			<div className = "menu">
				<Link to = "/1" style = {{'textDecoration' : 'none'}}>
					<span className = {`item ${page===1 ? "active" : ""}`}>
						공지사항
					</span>
				</Link>
				<Link to = "/2" style = {{'textDecoration' : 'none'}}>
					<span className = {`item ${page===2 ? "active" : ""}`}>
						선수 추가
					</span>
				</Link>
				<Link to = "/3" style = {{'textDecoration' : 'none'}}>
					<span className = {`item ${page===3 ? "active" : ""}`}>
						메인 이미지 변경
					</span>
				</Link>
				<Link to = "/4" style = {{'textDecoration' : 'none'}}>
					<span className = {`item ${page===4 ? "active" : ""}`}>
						메인 동영상 변경
					</span>
				</Link>
				<Link to = "/5" style = {{'textDecoration' : 'none'}}>
					<span className = {`item ${page===5 ? "active" : ""}`}>
						경기 기록 추가
					</span>
				</Link>
			</div>
		</div>
	)
};

export default Header;