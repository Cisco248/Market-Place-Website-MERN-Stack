import React, { useState, useEffect, useRef } from "react";
import "./ProductPage.css";
import NavigationBar from "../component/NavigationBar"
import Footer from "../component/Footer"

export const ProductPage = () => {
    const [bidAmount, setBidAmount] = useState("");
    const [currentBid, setCurrentBid] = useState(1.50);
    const [totalBids, setTotalBids] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // 24 hours in seconds
    const [computerBid, setComputerBid] = useState(0);
    const [showModal, setShowModal] = useState(false); // New state variable for the modal
    const [showBidsModal, setShowBidsModal] = useState(false); // New state variable for the bids modal
    const [showCommitmentModal, setShowCommitmentModal] = useState(false); // New state variable for the commitment modal
    const [showComputerBidModal, setShowComputerBidModal] = useState(false); // New state variable for the computer bid modal
    const [showEndAuctionModal, setShowEndAuctionModal] = useState(false); // New state variable for the end auction modal
    const [bids, setBids] = useState([]); // New state variable for the list of bids
    const [auctionEnded, setAuctionEnded] = useState(false); // New state variable to track if the auction has ended
    const [activeTab, setActiveTab] = useState("getABetterIdea"); // New state variable for the active tab
    const [mainImage, setMainImage] = useState("s-l1600.jpg"); // New state variable for the main image
    const [mainContent, setMainContent] = useState({ type: 'image', src: 's-l1600.jpg' }); // New state variable for the main content


    const modalRef = useRef(null); // Reference to the modal
    const bidsModalRef = useRef(null); // Reference to the bids modal
    const commitmentModalRef = useRef(null); // Reference to the commitment modal
    const computerBidModalRef = useRef(null); // Reference to the computer bid modal
    const endAuctionModalRef = useRef(null); // Reference to the end auction modal

    const handleBidChange = (event) => {
        setBidAmount(event.target.value);
    };

    const handlePlaceBid = () => {
        const newBidAmount = parseFloat(bidAmount);

        if (!isNaN(newBidAmount) && newBidAmount > currentBid) {
            setCurrentBid(newBidAmount);
            setTotalBids((prevTotalBids) => prevTotalBids + 1);
            setBids((prevBids) => [...prevBids, { bidder: 'User', amount: newBidAmount }]); // Add the user's bid to the list of bids

            // If it's the first bid, start the timer and show the commitment modal
            if (totalBids === 0) {
                startTimer();
                setShowCommitmentModal(true);
            }

            // You can add further logic here, such as updating the server with the new bid

            console.log("Placing bid:", newBidAmount);
            console.log("Current bid updated:", newBidAmount);
            console.log("Total bids updated:", totalBids + 1);

            // Computer places a bid against the user
            placeComputerBid(newBidAmount);
        } else {
            console.log("Invalid bid amount or bid amount is not greater than the current bid.");
            setShowModal(true); // Show the modal when the bid is invalid
        }
    };

    const placeComputerBid = (userBid) => {
        // Delay the computer's bid by a random amount of time between 5 and 15 seconds
        const delay = Math.random() * (15000 - 5000) + 5000; // Generates a random number between 5000 and 15000

        setTimeout(() => {
            // Only place a bid if the auction has not ended
            if (!auctionEnded) {
                // Computer always bids 2 times the user's bid
                const newComputerBid = userBid * 2;
                setCurrentBid(newComputerBid);
                setComputerBid(newComputerBid);
                setTotalBids((prevTotalBids) => prevTotalBids + 1);
                setBids((prevBids) => [...prevBids, { bidder: 'Computer', amount: newComputerBid }]); // Add the computer's bid to the list of bids

                console.log("Computer placing bid:", newComputerBid);
                console.log("Current bid updated:", newComputerBid);
                console.log("Total bids updated:", totalBids + 1);

                // Play a sound notification
                new Audio('Ebay_Ca-ching.mp3').play().catch(error => console.log(error));

                // Show the computer bid modal for 5 seconds
                setShowComputerBidModal(true);
                setTimeout(() => {
                    setShowComputerBidModal(false);
                }, 5000);
            }
        }, delay);
    };

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft > 0) {
                    return prevTimeLeft - 1;
                } else {
                    clearInterval(timerInterval);
                    // Handle the end of the auction
                    console.log("Auction ended!");
                    setAuctionEnded(true); // Set the auction as ended
                    setShowEndAuctionModal(true); // Show the end auction modal
                    return 0;
                }
            });
        }, 1000); // Update the timer every second
    };

    const resetAuction = () => {
        // Reset all the state variables to their initial values
        setBidAmount("");
        setCurrentBid(1.50);
        setTotalBids(0);
        setTimeLeft(30);
        setComputerBid(0);
        setShowModal(false);
        setShowBidsModal(false);
        setShowCommitmentModal(false);
        setShowComputerBidModal(false);
        setShowEndAuctionModal(false);
        setBids([]);
        setAuctionEnded(false);
    };

    useEffect(() => {
        // Cleanup the timer interval when the component is unmounted
        return () => clearInterval(startTimer);
    }, []);

    useEffect(() => {
        // Add an event listener to the document that closes the modal when the user clicks outside the modal content
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
            if (bidsModalRef.current && !bidsModalRef.current.contains(event.target)) {
                setShowBidsModal(false);
            }
            if (commitmentModalRef.current && !commitmentModalRef.current.contains(event.target)) {
                setShowCommitmentModal(false);
            }
            if (computerBidModalRef.current && !computerBidModalRef.current.contains(event.target)) {
                setShowComputerBidModal(false);
            }
            if (endAuctionModalRef.current && !endAuctionModalRef.current.contains(event.target)) {
                setShowEndAuctionModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener when the component is unmounted
            document.removeEventListener("mousedown", handleClickOutside);
        };
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
        <div className="product-page">
            <div className="div-2">
                <div className="product-images">
                  {mainContent.type === 'image' ? (
                    <img src={mainContent.src} alt="Main Content" className="mainimage" />
                    ) : (
                    <video src={mainContent.src} controls className="mainimage"></video>
                    )}
                    <img src="s-l1600 (1).jpg" alt="Mini Content 1" className="minImage1" onClick={() => setMainContent({ type: 'image', src: 's-l1600 (1).jpg' })} />
                    <img src="s-l1600 (2).jpg" alt="Mini Content 2" className="minImage2" onClick={() => setMainContent({ type: 'image', src: 's-l1600 (2).jpg' })} />
                    <img src="s-l1600 (3).jpg" alt="Mini Content 3" className="minImage3" onClick={() => setMainContent({ type: 'image', src: 's-l1600 (3).jpg' })} />
                    <video src="Video-Placeholder.mp4" alt="Mini Content 4" className="minImage4" onClick={() => setMainContent({ type: 'video', src: 'Video-Placeholder.mp4' })} />
                </div>

                <h2 className="product-title">NIKE AIR PENNY II QS ORLANDO MAGIC HOME FOAMPOSITE OG BRAND NEW SIZE 8.5</h2>
                <div className="bidding">
                    <button className="place-bid-button" onClick={handlePlaceBid}>
                        <div className="buttonText">Place Bid</div>
                    </button>
                    <div className="prices-and-bids">
                        <div className="current-bid">${currentBid.toFixed(2)}</div>
                        <div className="current-bid-text">Current Bid:</div>
                        <div className="all-bids" onClick={() => setShowBidsModal(true)}>All Bids: {totalBids}</div> {/* Make the total bids clickable */}
                        <div className="Time-left">Auction Ends In: {formatTime(timeLeft)}</div>
                    </div>
                    <div className="bid-input-field">
                        <input
                            className="input-field"
                            type="text"
                            value={bidAmount}
                            onChange={handleBidChange}
                            placeholder="$ Enter a new bid here...."
                        />
                    </div>
                        <div className="tabs">
                        <button className={activeTab === "getABetterIdea" ? "active" : ""} onClick={() => setActiveTab("getABetterIdea")}>Know More...</button>
                        <button className={activeTab === "shipping" ? "active" : ""} onClick={() => setActiveTab("shipping")}>Shipping</button>
                        <button className={activeTab === "auctionPolicies" ? "active" : ""} onClick={() => setActiveTab("auctionPolicies")}>Auction Policies</button>
                    </div>
                    {activeTab === "getABetterIdea" && (
                     <div className="product-details">
                       <h2 className="heading">Know More....</h2>
                    
                        <p className="bulletPoints">⦿ Condition: Brand new Nike Air Penny II QS Orlando Magic Home Foamposite OG in size 8.5, ensuring pristine and unworn condition for a fresh and stylish appearance.</p>

                        <p className="bulletPoints">⦿ Authenticity: Guaranteed authenticity of the Nike Air Penny II QS Orlando Magic Home Foamposite OG, assuring buyers that they are getting a genuine product with all the original features and details.</p>

                        <p className="bulletPoints">⦿ Exclusive Design: Features the iconic Orlando Magic Home Foamposite OG design, a classic and sought-after colorway that pays homage to Penny Hardaway's time with the Orlando Magic in the 90s.</p>

                        <p className="bulletPoints">⦿ Size 8.5: Specifically sized at 8.5, providing a versatile fit for individuals who wear this size and ensuring comfort while maintaining the signature style of the Air Penny II.</p>

                        <p className="bulletPoints">⦿ Limited Edition: Being a Quickstrike (QS) release, these Nike Air Penny II sneakers are likely to be a limited edition, making them a unique and collectible addition to any sneaker enthusiast's collection.</p>

                     </div>
                     )}
                    {activeTab === "shipping" && (
                    <div className="shipping-details">
                      <h2 className="heading-shipping">Shipping</h2>
                    
                        <p className="shipping-bulletPoints"> <strong>Handling Time:</strong>

                            We pride ourselves on swift order processing. Your order will be carefully picked, packed, and prepared for shipment within 1-2 business days from the date of purchase. Please note that handling time may be extended during peak seasons or promotional periods.</p>

                        <p className="shipping-bulletPoints">  <strong>Shipping Time:</strong>

                            Our shipping partners work diligently to deliver your package to your doorstep in a timely manner. The estimated shipping time will depend on the destination and the shipping method chosen during checkout. Standard shipping typically takes 3-5 business days, while expedited options may offer faster delivery.</p>

                        <p className="shipping-bulletPoints"> <strong>Shipping Options:</strong><br />

                            Standard Shipping:

                            Cost-effective and reliable, our standard shipping option ensures your order reaches you within the estimated time frame.<br />

                            Expedited Shipping:

                            You can expect to receive it within 1-3 business days, depending on your location.<br />

                            Express Overnight Shipping:

                            Your items will be delivered to your doorstep on the next business day after the handling time. Please note that this option may have additional costs associated with it.</p>

                        </div>
                        )}
                        {activeTab === "auctionPolicies" && (
                        <div className="auctionPolicies">
                      <h2 className="headingPolicies">Auction Policies</h2>
                    
                        <p className="bulletPointsPolicies"> <strong>Bid Commitment:</strong><br /> 

                            Bidders are committed to purchasing items they have won in an auction.<br />
                            Bid only if you intend to complete the transaction upon winning.</p>

                        <p className="bulletPointsPolicies">  <strong>Payment Promptness:</strong><br />

                            Successful bidders must make prompt payments after winning an auction.<br />
                            Failure to complete payment may result in account restrictions.</p>

                        <p className="bulletPointsPolicies"> <strong>Item Inspection:</strong><br />

                            Review item descriptions and images carefully before bidding.<br />

                            Report any discrepancies or issues promptly to customer support.<br />

                            Excessive bid retractions may lead to bidding restrictions.</p>
 
                        </div>
                     )}
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content" ref={modalRef}>
                        <button className="close" onClick={() => setShowModal(false)}>×</button>
                        <p>Place a bid higher than the current bid.</p>
                        <button className="okButton" onClick={() => setShowModal(false)}>Ok</button>
                    </div>
                </div>
            )}
            {showBidsModal && (
                <div className="modal">
                    <div className="modal-content" ref={bidsModalRef}>
                            <button className="close" onClick={() => setShowBidsModal(false)}>&times;</button>
                        <p>All Bids:</p>
                        <ul>
                            {bids.map((bid, index) => (
                                <li key={index}>{bid.bidder}: ${bid.amount.toFixed(2)}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {showCommitmentModal && (
                <div className="modal">
                    <div className="modal-content" ref={commitmentModalRef}>
                        <button className="close" onClick={() => setShowCommitmentModal(false)}>&times;</button>
                        <p>If you place a bid, you are committed to buy this product.</p>
                        <button className="okButton" onClick={() => setShowCommitmentModal(false)}>Ok</button>
                    </div>
                </div>
            )}
            {showComputerBidModal && (
                <div className="modal">
                    <div className="modal-content" ref={computerBidModalRef}>
                        <button className="close" onClick={() => setShowComputerBidModal(false)}>&times;</button>
                        <p>Computer placed a bid: ${computerBid.toFixed(2)}</p>
                    </div>
                </div>
            )}
            {showEndAuctionModal && (
                <div className="modal">
                    <div className="modal-content" ref={endAuctionModalRef}>
                        <button className="close" onClick={() => setShowEndAuctionModal(false)}>&times;</button>
                        <p>You have won the NIKE AIR PENNY II QS ORLANDO MAGIC HOME FOAMPOSITE OG BRAND NEW SIZE 8.5 for ${currentBid.toFixed(2)}. Congratulations!</p>
                        <button className="okButton" onClick={() => {setShowEndAuctionModal(false); resetAuction();}}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    </div>
    );
};