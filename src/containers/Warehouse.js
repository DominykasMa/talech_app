import React, { Component } from 'react'
import WarehouseTable from '../components/WarehouseTable'
import { Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
  getData,
  deleteProduct,
  editProduct,
  addProduct,
  enableDisableProduct,
  editQuantity,
  editPrice
} from '../redux/actions'
import Add from '../components/actions/Add'


class CounterComponent extends Component {

  componentDidMount() {
    this.props.getProducts();
  }


  render() {
    const {
      data,
      deleteProduct,
      editProduct,
      addProduct,
      enableDisableProduct,
      editQuantity,
      editPrice
    } = this.props

    return (
      <div className='ui container'>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Header content='Talech app' />
          </Grid.Column>
          <Grid.Column>
            <Add addProduct={addProduct} />
          </Grid.Column>
        </Grid>
        {
          data &&
          <WarehouseTable
            data={data}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
            enableDisableProduct={enableDisableProduct}
            editQuantity={editQuantity}
            editPrice={editPrice}
          />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.app.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getData());
    },
    deleteProduct: (id) => {
      dispatch(deleteProduct(id));
    },
    editProduct: (product) => {
      dispatch(editProduct(product));
    },
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
    enableDisableProduct: (id) => {
      dispatch(enableDisableProduct(id));
    },
    editQuantity: (productQuantity, id) => {
      dispatch(editQuantity(productQuantity, id));
    },
    editPrice: (productPrice, id) => {
      dispatch(editPrice(productPrice, id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)