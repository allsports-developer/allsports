import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('adminStore')
@observer
class Video extends Component{
	
	componentDidMount(){
		const { adminStore } = this.props;
		const {
			page,
			handlePage
		} = adminStore;
		
		handlePage(4);
	}
	
	render(){
		const { adminStore } = this.props;
		const{
			video,
			handleChangeInput,
			changeVideo
		} = adminStore;
		
		return(
			<div className = "Video">
				<p className = "title-header">
					메인 동영상 변경
				</p>
				
				<form onSubmit = {e=>e.preventDefault()}>
					<input
						type = "text"
						className = "uk-input"
						placeholder = "메인동영상 링크를 입력해주세요."
						name = "video"
						value = {video}
						onChange = {handleChangeInput}
						/>
					
					<button
						className = "uk-button"
						onClick = {changeVideo}
						>
						변경하기
					</button>
				</form>
			
			</div>
		);
	}
}

export default observer(Video);