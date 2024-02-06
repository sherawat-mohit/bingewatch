import { Component } from "react";

class Moviecard extends Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "A group of heroes with superpowers",
            price: 299,
            rating: 8,
            stars: 0,
            fav: true
        }
    }


    addStars = () => {
        // console.log("this: ", this);
        // this.state.stars += 0.5;

        // Form 1 of setState
        if (this.state.stars >= 5) {
            return;
        }
        this.setState({
            stars: this.state.stars + 0.5
        })

        // Form 2 of setState
        // this.setState((prevState) => {
        //     return {
        //         stars: prevState.stars + 0.5
        //     }
        // })
    }

    removeStars = () => {
        if (this.state.stars <= 0) {
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        });
    }

    togglefav = () => {
        this.setState({
            fav: !this.state.fav
        });
    }
    render() {
        const { title, plot, price, rating, stars, fav } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" alt="decrease"
                                    className="str-btn"
                                    onClick={this.removeStars} />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star"
                                    className="stars" />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase"
                                    className="str-btn"
                                    onClick={this.addStars} />
                                <span className="StarCount">{stars}</span>
                            </div>

                            {fav ? <button className="unfavourite-btn" onClick={this.togglefav}>Un-favourite</button> : <button className="favourite-btn" onClick={this.togglefav}>Favourite</button>}




                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Moviecard;