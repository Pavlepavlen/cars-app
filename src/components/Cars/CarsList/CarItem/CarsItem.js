import React, {Component} from "react";
import styled from "styled-components";



class CarsItem extends Component {

    state = {
        loadMore: false
    }

    loadMoreHandler = () => {

        this.setState((prevState, props) => {
            return {
                loadMore: !prevState.loadMore
            }
        })
    }

    loadMoreToggleHandler = () => {
    
    }

    render () {

    const Styles = styled.article`

    background-color: var(--main-gray);
    border-radius: 0.8rem;
    margin: 1rem 0;

    @media screen and (min-width: 900px){
        flex: 1;
        margin: 1rem 1rem;
        height: max-content;
    }

    .img-container {
        position: relative;
    }

    .img-container img.car-img {
        width: 100%;
        max-height: 400px;
        height: 100%;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        display: block;
        border: 2px solid var(--main-purple);
        border-bottom: 5px solid var(--main-red);
    }

    .img-container img.car-logo {
        position: absolute;
        max-width: 30px;
        width: 100%;
        bottom: 8px;
        left: 4px;
        border-radius: 0.5rem;
    }

    .close-btn,
    .like-btn {
        position: absolute;
        display: block;
        top: 5%;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        opacity: 0;
    }

    .img-container:hover .close-btn,
    .img-container:hover .like-btn {
        opacity: 1;
    }

    .close-btn:hover,
    .like-btn:hover {
        font-size: 2rem;
     }

    .like-btn {
        right: 20%;
        color: var(--main-red);
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .close-btn {
        right: 5%;
        color: var(--main-light);
        font-size: 1.5rem;
    }

    .car-description {
        padding: 1rem 0.5rem;
        color: var(--main-light);
        text-transform: capitalize;
    }
    .car-description h4,
    .car-description h3 {
        margin: 0.6rem 0 0.8rem 0;

    }

    .car-description h3 span {
        color: var(--main-red);
        padding-left: 5px;
    }

    .car-description h4 span {
        color: var(--main-purple);
        padding-left: 5px;
    }

    .car-description h6 {
        font-size: 0.9rem;
    }

    .car-description h6 span {
        display: inline-block;
        color: var(--main-darkblue);
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 15px;
    }

    .car-description p.active {
        font-size: 0.9rem;
        text-align: justify;
        color: var(--main-lavanda);
        margin: 0.3rem 0;
    }

    .hide {
        display: none;
    }
`;

        const {id, company, model, info, logo, img, click} = this.props;

        return (
            <Styles>
                <div className="img-container">
                    <img  className="car-img"  src={img}
                            alt="vechilecs" />
                    <img className="car-logo"   src={logo} 
                            alt="car-logo"  />
                    <span className="close-btn">
                        <i className="fas fa-window-close" onClick={() => {
                            click(id);
                        }} />
                    </span>
                    <span className="like-btn">
                        <i className="fas fa-heart" />
                    </span>
                </div>

                <div className="car-description">
                    <h3>company: <span>{company}</span></h3>
                    <h4>model: <span>{model}</span></h4>
                    <h6>load more
                        <span>
                            <i class="far fa-caret-square-down" onClick={this.loadMoreHandler} />
                        </span>
                    </h6>
                    <p className={this.state.loadMore ? 'active' : 'hide'}>{info}</p>
                </div>
            </Styles>
        )
    }
}

export default CarsItem;