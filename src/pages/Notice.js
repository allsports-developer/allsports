import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';


@inject('adminStore')
@observer
class Notice extends Component{
	
	componentDidMount(){
		const { adminStore } = this.props;
		const {
			page,
			handlePage,
			getNoticePosts,
		} = adminStore;
		
		handlePage(1);
		getNoticePosts();
	}
	
	render(){
		const { adminStore } = this.props;
		const {
			state,
			error,			
			posts,
			title,
			content,
			handleNoticeInput,
			uploadNoticePost,
			deleteNoticePost,
		} = adminStore;
		
		return(
			<div className = "Notice">
				<p className = "title-header">
					공지사항 입력
				</p>
				
				<form onSubmit = {e=>e.preventDefault()}>
					<input
						type = "text"
						className = "uk-input"
						placeholder = "공지사항 제목을 입력해주세요."
						name = "title"
						value = {title}
						onChange = {handleNoticeInput}
						/>
					<textarea
						className = "uk-textarea"
						placeholder = "공지사항 내용을 입력해주세요."
						name = "content"
						value = {content}
						onChange = {handleNoticeInput}
						/>
					
					<button
						className = "uk-button"
						onClick = {uploadNoticePost}
						>
						작성하기
					</button>
				</form>
				
				<div className = "post-list">
					{
						posts.map((post) => {
							return(
								<div className = "post-item" key = {post.sequence} onClick = {()=>deleteNoticePost(post.sequence)}>
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

export default observer(Notice);