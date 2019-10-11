import React from 'react';
import ReactDOM from 'react-dom';
import store from './App';   //引入store
import { Provider, connect } from 'react-redux'

import { addFn, minFn, todoFn } from './action'   //引入action

// ================
// const myrender = () => {
//   class App extends React.Component {
//     render () {
//       const lists = store.getState().todoA.map((item, index) => {
//         return <li key={index}>{item}--这是通过组件map渲染的</li>
//       })
//       return (
//         <div>
//           <h1>{store.getState().counter}</h1>
//           <button onClick={() => store.dispatch(addFn)}>自增 </button> {/*dispatch(action)修改state*/}
//           <button onClick={() => store.dispatch(minFn)}>自减 </button>
//           <button onClick={() => store.dispatch(todoFn)}>add text </button>
//           <ul>
//             {lists}
//           </ul>
//         </div>
//       )
//     }
//   }
//   ReactDOM.render(<App />, document.getElementById('root'));
// }

// myrender()

// //监听sotre
// store.subscribe(() => {
//   console.log(store.getState())
//   myrender()
// });


// =====使用react-redux=======
class Counter extends React.Component {
  render () {
    const { stateTodata, clickAdd, clickMin, liList, clickText } = this.props
    return (
      <div>
        <span>{stateTodata}</span><br />
        <span>这是span标签</span><br />
        <button onClick={clickAdd}>加1</button><br />
        <button onClick={clickMin}>减1</button><br />
        <button onClick={clickText}>add text</button>
        <ul>
          {liList}
        </ul>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    stateTodata: state.counter,
    liList: listArr(state.todoA)
  }
}

function listArr (data) {
  return data.map((item, index) => {
    return <li key={index}>{item}--这是通过组件map渲染的</li>
  })
}

function mapDispatchToProps (dispatch) {
  return {
    clickAdd: () => dispatch(addFn),
    clickMin: () => { dispatch(minFn) },
    clickText: () => { dispatch(todoFn) }
  }
}


const MyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);

