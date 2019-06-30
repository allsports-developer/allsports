import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('adminStore')
@observer
class League extends Component{
	
	componentDidMount(){
		const { adminStore } = this.props;
		const {
			page,
			handlePage,
			getLeaguePosts,
		} = adminStore;
		
		handlePage(5);
		getLeaguePosts();
	}
	
	render(){
		const { adminStore } = this.props;
		const { 
			posts,
			deleteLeaguePost,
			league_name,
			league_date,
			league_info,
			handleLeagueInput,
			uploadLeaguePost
		} = adminStore;
		
		return(
			<div className = "League">
				<p className = "title-header">
					경기 입력
				</p>
				
				<form onSubmit = {e=>e.preventDefault()}>
					<input
						type = "text"
						className = "uk-textarea"
						placeholder = "대회 이름"
						name = "name"
						value = {league_name}
						onChange = {handleLeagueInput}
						/>
					
					<input
						type = "text"
						className = "uk-textarea"
						placeholder = "리그 날짜"
						name = "date"
						value = {league_date}
						onChange = {handleLeagueInput}
						/>
					
					<textarea
						className = "uk-textarea"
						placeholder = "리그 정보"
						name = "info"
						value = {league_info}
						onChange = {handleLeagueInput}
						/>
					
					<div>
						<p className = "label">리그 사진 업로드</p>
						<input
							type = "file"
							/>
					</div>
					
					<button
						className = "uk-button"
						onClick = {uploadLeaguePost}
						>
						작성하기
					</button>
				</form>
				
				<div className = "post-list">
					{
						posts.map((post) => {
							return(
								<div className = "post-item" key = {post.sequence} onClick = {()=>deleteLeaguePost(post.sequence)}>
									<p className = "title">{post.title}</p>
									<p className = "delete">X</p>
									<p className = "date">{post.wdate}</p>
								</div>
							)
						})
					}
				</div>
			
			</div>
		);
	}
}

export default observer(League);