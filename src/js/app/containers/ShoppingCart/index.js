import { connect } from 'react-redux'

import ShoppingCart from './../../components/Header/Items/ShoppingCart'

import { update, openModalInfoOutward, openModalInfoReturn, setOpenModalInfoOutwardId, setOpenModalInfoReturnId, setOpenModalPayment, setOrders, error, deletedJourneyShoppingCart } from './../../actions/actions'

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart,
    journeyPlan: state.journeyPlan,
    addCart: state.addCart,
    openModalInfoOutward: state.openModalInfoOutward,
    openModalInfoReturn: state.openModalInfoReturn,
    openModalInfoOutwardId: state.openModalInfoOutwardId,
    openModalInfoReturnId: state.openModalInfoReturnId,
    openModalPayment: state.openModalPayment,
    orders: state.orders,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: (value) =>{
      dispatch(update(value))
    },
    setOpenModalInfoOutward: (bool) => {
      dispatch(openModalInfoOutward(bool))
    },
    setOpenModalInfoReturn: (bool) => {
      dispatch(openModalInfoReturn(bool))
    },
    setOpenModalInfoOutwardId: (value) => {
      dispatch(setOpenModalInfoOutwardId(value))
    },
    setOpenModalInfoReturnId: (value) => {
      dispatch(setOpenModalInfoReturnId(value))
    },
    setOpenModalPayment: (bool) => {
      dispatch(setOpenModalPayment(bool))
    },
    setOrder: (data) => {
      dispatch(setOrders(data))
    },
  }
}

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)

export default ShoppingCartContainer
