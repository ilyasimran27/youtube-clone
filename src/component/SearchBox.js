
import React from 'react';
class SearchBox extends React.Component {
    state = {
        term: ''
    }
    onChangeEnter = event => {
        this.setState({ term: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="navbar border">
                <form onSubmit={this.onFormSubmit} className="form-inline col-12 my-lg-0">

                    <img src="https://cdn.shopify.com/s/files/1/1183/6700/files/YOUTUBE_LOGO_NEW_121018.png?v=1544499859" style={{ height: 60 }} alt="Logo" className="input-group-append"></img>
                    <div className="input-group col-8 "><input type="text" className="form-control col-sm-8"
                        value={this.state.term}
                        onChange={this.onChangeEnter}
                    />
                        <div className="input-group-append">
                            <button className="btn btn-light  btn-outline-dark" onChange={this.onChangeEnter} ><i className="fa fa-search"></i></button>
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}
export default SearchBox;