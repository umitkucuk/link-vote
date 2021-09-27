import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  padding: 1.6rem;
  backdrop-filter: blur(1.2px);
  box-sizing: border-box;
`

export const ModalHeader = styled.h3`
  margin: 0;
`

export const ModalInner = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white};
  z-index: 99;
  overflow-y: auto;
  top: 10%;
  border-radius: 0.8rem;
  padding: 3.2rem;
  max-width: 40rem;
  width: 100%;
  height: 16rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`

export const ModalBody = styled.div`
  height: 100%;
  overflow-y: auto;
`

export const ModalClose = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`

export const ModalAction = styled.div`
  margin-top: 1.6rem;
`
