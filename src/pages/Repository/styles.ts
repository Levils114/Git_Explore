import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a{
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover{
			color: #000;
		}

		svg{
			margin-right: 4px;
			color: #3d3d4d;
		}
	}
`

export const RepositoryInfo = styled.section`
	margin-top: 80px;
	header{
		display: flex;
		align-items: center;
		img{
			wight: 120px;
			height: 120px;
			border-radius: 50%;
		}
		div{
			margin-left: 24px;
			strong{
				font-size: 36px;
				color: #3d3d4d;
			}
			p{
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}
	div.list{
		display: flex;
		align-items: center;
		justify-content: center;
			ul{
				display: flex;
				list-style: none;
				margin-top: 40px;
				& + ul{
					margin-left: 80px;
				}

				li{
					strong{
						display: block;
						font-size: 36px;
						color: #3d3d4d;
					}
					span{
						display: block;
						margin-top: 4px;
						color: #6c6c80;
					}
			}
		}

		div.download{
			margin-left: auto;
			align-items: center;

			button{
				width: 210px;
				height: 70px;
				background: #04d361;
				border-radius: 0px 5px 5px 0px;
				border: 0;
				font-weight: bold;
				transition: background-color 0.2s;

				&:hover{
					background: ${ shade(0.2, "#04d361") }
				}

				a{
					text-decoration: none;
					color: #fff;
				}
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 80px;

	a{
		background: #fff;
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		text-decoration: none;

		display: flex;
		align-items: center;
		transition: transform 0.2s;

		&:hover{
			transform: translateX(10px);
		}

		& + a {
			margin-top: 16px;
		}

		div{
			margin: 0 16px ;
			flex: 1;

			strong{
				font-size: 20px;
				color: #3d3d4d;
			}

			p{
				font-size: 18px ;
				color: #a8a8b3 ;
				margin-top: 4px;
			}
		}

		svg{
			margin-left: auto;
			color: #3d3d4d;
		}

	}
`;
