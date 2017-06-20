import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'
import _ from 'lodash'

import {createBoard, findPossibleMoves} from '../../utils/knightsTour'

import Row from './Row'
import Field from './Field'

import './styles.css'

class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(this.props.boardSize),
      position: null,
      possibleMoves: [],
      currentMove: 0
    }

    this.handleMove = this.handleMove.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      board: createBoard(nextProps.boardSize)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps === this.props) return false
    else return true
  }

  handleMove(e) {
    let field = e.target
    let coords = e.target.getAttribute('data-field').split('x')
    let {board, position, possibleMoves} = this.state

    coords = {x: parseInt(coords[0]), y: parseInt(coords[1])}


    // _.contains(possibleMoves, coords) doesn't work for some reason
    let foundMove = possibleMoves.filter(move => move.x === coords.x && move.y === coords.y)
    if(this.state.position && !foundMove.length) return false

    // Remove active modifier from last active element
    let activeField = this.refs.matrix.querySelector('.matrix__row__field--active')
    activeField && activeField.classList.remove('matrix__row__field--active')

    // Add active modifier to last clicked element
    field.classList.add('matrix__row__field--active')

    // Any better way of manipulating multi dimensional array state?
    board[coords.x][coords.y] = false
    possibleMoves = findPossibleMoves(board, coords.x, coords.y)



    this.setState({
      position: coords,
      currentMove: this.state.currentMove + 1,
      possibleMoves,
      board
    }, () => {
      field.textContent = this.state.currentMove
      if(!possibleMoves.length){
        alert('Koniec gry')
        return false;
      }
    })

  }



  render() {

    let createRow = (field, fieldIndex, rowIndex) => (
      <Field key={v4()} fieldCoords={fieldIndex+'x'+rowIndex} onClick={this.handleMove} />
    )

    let createBoard = (row, rowIndex) => (
      <Row key={v4()}>
        {row.map((field, fieldIndex) => createRow(field, fieldIndex, rowIndex))}
      </Row>
    )

    return (
      <div ref="matrix" className="matrix">
        {this.state.board.map(createBoard)}
      </div>
    );
  }
}

Matrix.propTypes = {
  boardSize: PropTypes.number
}

export default Matrix
