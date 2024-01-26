import { useState, useEffect } from "react";
import NavigationBar from "../component/NavigationBar"
import Footer from "../component/Footer"
import Style from "./BidPage.module.css";

export const BidPage = () => {
    const [bidAmount, setBidAmount] = useState("");
    const [currentBid, setCurrentBid] = useState(11.87);
    const [totalBids, setTotalBids] = useState(0);
    const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

    const handleBidChange = (event) => {
        setBidAmount(event.target.value);
    };

    const handlePlaceBid = () => {
        const newBidAmount = parseFloat(bidAmount);

        if (!isNaN(newBidAmount) && newBidAmount > currentBid) {
            setCurrentBid(newBidAmount);
            setTotalBids((prevTotalBids) => prevTotalBids + 1);

            // If it's the first bid, start the timer
            if (totalBids === 0) {
                startTimer();
            }

            // You can add further logic here, such as updating the server with the new bid

            console.log("Placing bid:", newBidAmount);
            console.log("Current bid updated:", newBidAmount);
            console.log("Total bids updated:", totalBids + 1);
        } else {
            console.log("Invalid bid amount or bid amount is not greater than the current bid.");
        }
    };

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft > 0) {
                    return prevTimeLeft - 1;
                } else {
                    clearInterval(timerInterval);
                    // You can add further logic here, such as handling the end of the auction
                    console.log("Auction ended!");
                    return 0;
                }
            });
        }, 1000); // Update the timer every second
    };

    useEffect(() => {
        // Cleanup the timer interval when the component is unmounted
        return () => clearInterval(startTimer);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}h ${minutes}m ${remainingSeconds}s`;
    };

    return (
        <div>
            <NavigationBar />
            <div className={Style.bid_page}>
                <div className={Style.bid_page_alignment}>
                    <div className={Style.bid_page_title}>
                        <p className={Style.title}>NIKE AIR PENNY II QS ORLANDO MAGIC HOME FOAMPOSITE OG BRAND NEW SIZE 8.5</p>
                    </div>

                <div className={Style.bid_section}>
                    <div className={Style.bid_images_align}>
                        <div className={Style.images}>
                            <img src="s-l1600.jpg" alt="Product Image 1" className={Style.bid_images}/>
                            <img src="s-l1600 (1).jpg" alt="Product Image 2" className={Style.bid_images} />
                        </div >
                        <div className={Style.images}>
                            <img src="s-l1600 (2).jpg" alt="Product Image 3" className={Style.bid_images} />
                            <img src="s-l1600 (3).jpg" alt="Product Image 4" className={Style.bid_images} />
                        </div>
                    </div > 
                    <div className={Style.bidding}>
                        <div className={Style.box}>
                            <div className={Style.bidding_text}>
                                <h1 className={Style.text}>Current Bid : LKR {currentBid.toFixed(2)}</h1>
                                <h2 className={Style.text}>All Bids: {totalBids}</h2>
                                <h2 className={Style.text}>Time left: {formatTime(timeLeft)}</h2>
                                <div className={Style.bid_value}>
                                    <input className={Style.bid_value_box} type="text" value={bidAmount} onChange={handleBidChange} placeholder="Enter a New Bid...."/>
                                    <button className={Style.place_bid_button} onClick={handlePlaceBid}>Place Bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

