import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('adminStore')
@observer
class Player extends Component{
	
	componentDidMount(){
		const { adminStore } = this.props;
		const {
			page,
			handlePage
		} = adminStore;
		
		handlePage(2);
	}
	
	render(){
		const { adminStore } = this.props;
		const {
			param1,
			param2,
			param3,
			param4,
			param5,
			param6,
			param7,
			handlePlayerInput,
			uploadPlayer
		} = adminStore;
		
		return(
			<div className = "Player">
				<p className = "title-header">
					선수 입력하기
				</p>
				
				<form onSubmit = {e=>e.preventDefault()}>
					<input
						className = "uk-input"
						placeholder = "선수 이름 ex) 김가희"
						name = "param1"
						value = {param1}
						onChange = {handlePlayerInput}
						/>
					<input
						className = "uk-input"
						placeholder = "선수 종목 ex) 철인 3종 경기"
						name = "param3"
						value = {param3}
						onChange = {handlePlayerInput}
						/>
					<input
						className = "uk-input"
						placeholder = "선수 소속 ex)서울시 철인 3종 협회"
						name = "param4"
						value = {param4}
						onChange = {handlePlayerInput}
						/>
					<input
						className = "uk-input"
						placeholder = "선수 성별 ex)남, 녀"
						name = "param5"
						value = {param5}
						onChange = {handlePlayerInput}
						/>
					<input
						className = "uk-input"
						placeholder = "선수 구분 ex) 국가대표 시니어 남자"
						name = "param7"
						value = {param7}
						onChange = {handlePlayerInput}
						/>
					<input
						className = "uk-input"
						placeholder = "선수 코드 ex) 131"
						name = "param2"
						value = {param2}
						onChange = {handlePlayerInput}
						/>
					
					<textarea
						className = "uk-textarea"
						placeholder = "선수 커리어"
						name = "param6"
						value = {param6}
						onChange = {handlePlayerInput}
						/>
					<div>
						<p className = "label">프로필 사진 업로드</p>
						<input
							type = "file"
							/>
					</div>
					<button
						className = "uk-button"
						onClick = {uploadPlayer}
						>
						작성하기
					</button>
				</form>
			
			</div>
		);
	}
}

export default observer(Player);