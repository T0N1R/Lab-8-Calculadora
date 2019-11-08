import React from 'react';
import { shallow, mount, render } from 'enzyme';
import jest from "jest-mock"

import Boton from '../components/button';

describe('A button', function() {
    it('should render only the number', function(){
        const calc = shallow(<Boton valor="5" />)
        const text = calc.text()
        expect(text).toEqual("5")
    });

    it('should call onclick with valor', function(){
        const bourne = jest.fn()
        const calc = mount(<Boton valor="7" onClick={bourne} />)
        calc.simulate('click')
        expect(bourne).toHaveBeenCalledWith("7")
  });

});