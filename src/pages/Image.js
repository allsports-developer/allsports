import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('adminStore')
@observer
class Image extends Component{
	
	componentDidMount(){
		const { adminStore } = this.props;
		const {
			page,
			handlePage
		} = adminStore;
		
		handlePage(3);
	}
	
	render(){
		const { adminStore } = this.props;
		
		return(
			<div className = "Image">
				<p className = "title-header">
					메인 이미지 변경
				</p>
				
				<form onSubmit = {e=>e.preventDefault()}>
					<input
						className = "uk-button"
						type = "file"/>
				</form>
			
			</div>
		);
	}
}

export default observer(Image);