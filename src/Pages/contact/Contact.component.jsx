import React from 'react'
import { Route } from "react-router-dom";
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import { connect } from 'react-redux'
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SHOP_DATA from "../../Pages/resources/shop.data";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        // const { updateCollections } = this.props
        // const collectionRef = firestore.collection('collections')
        // console.log(SHOP_DATA);
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        //     console.log("collectionMap-New",SHOP_DATA);
        //     console.log("collectionMap-New",collectionMap);
        //     // updateCollections(collectionMap)
        //     updateCollections(SHOP_DATA);
        //     this.setState({ loading: false })
        // })
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page" >
                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} /> */}
                <p>Threads Pvt Ltd is the most prevalent and popular type of Handmade Product entity in India.</p> <br/>
                <p>Call on: +91 9874234518</p> 
                <p>Email: contact@threads-reg.in</p>
                <p>Website: www.threads.com</p>

            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
    updateCollections: collectionMap => dispatch(updateCollections(SHOP_DATA))
})
export default connect(null, mapDispatchToProps)(Shop)