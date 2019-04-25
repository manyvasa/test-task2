import React from "react";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedPlan: null,
      count: '1',
      data: [
        {id: 1, name: 'license plan #1', price: 13, count: [1,5,10]},
        {id: 2, name: 'license plan #2', price: 22, count: [1,7,14]},
        {id: 3, name: 'license plan #3', price: 34, count: [1,10,20]}
      ]
    };

  }

  render() {
    const {data, selectedPlan, count } = this.state;
    return(
      <div className="sale-window">
          <div className="sale-window__list">

            {data.map((item, i) => (
              <div className="sale-window__group" key={i}>
                <input
                  type="radio"
                  className="sale-window__input"
                  name="radioGroup"
                  id={'plan' + item.id}
                  value={item.price}
                  onChange={() => this.setState({ selectedPlan: item })}
                >
                </input>
                <label htmlFor={'plan' + item.id} className="sale-window__label">
                  <div>
                    <span className="sale-window__button"></span>
                    <span className="sale-window__label-name">{item.name}</span>
                  </div>
                  <div className="sale-window__label-price">
                    <span>{'$' + item.price + ' peer license'}</span>
                  </div>
                </label>
              </div>
            ))}

          </div>

          <div className="sale-window__controls">

            <div className="sale-window__count">
              <span>Number of licenses:</span>
              <input
                className="sale-window__select"
                list="combobox"
                value={count}
                onChange={(e) => this.setState({ count: e.target.value })}
              >
              </input>
              <datalist id="combobox">
                {selectedPlan && selectedPlan.count.map((item, i) => <option key={i} value={item}>{item}</option> )}

              </datalist>
            </div>

            <div className="sale-window__action">
              <div className="sale-window__info-total">
                <span>total: </span>
                <span>${selectedPlan ? selectedPlan.price * count : 0}</span>
              </div>
              <button className="sale-window__custom-button">buy now</button>
              <div className="sale-window__info-name">
                <span>{selectedPlan ? selectedPlan.name : 'не выбрано'}</span>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
