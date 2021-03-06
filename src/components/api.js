import React, { useState } from "react";
import styled from "styled-components";

function Data() {
  const [val, setval] = useState("");
  const [orang, setorang] = useState("");
  const [hasil, sethasil] = useState("");

  return (
    <Container>
      <Wrap>
        <h3>Split Bills</h3>
        <Context>
          <form>
            <h3>Masukan Jumlah total</h3>
            <input
              type="tel"
              pattern="[0-9]*"
              placeholder="input number"
              value={val}
              onChange={(e) => setval(e.target.value)}
            />
            <h3>Jumlah orang</h3>
            <input
              type="tel"
              pattern="[0-9]*"
              placeholder="Jumlah orang"
              value={orang}
              onChange={(e) => setorang(e.target.value)}
            />
          </form>
          <button onClick={() => sethasil(val / orang)}>Hasil</button>
          <Pemisah>
            <h3>Hasil</h3>
            <input type="text" value={hasil} />
          </Pemisah>
        </Context>
      </Wrap>
    </Container>
  );
}

export default Data;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(76, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 27px 27px 53px #3a206b, -27px -27px 53px #703ecf;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 88%;
  border-radius: 20px;
  h3 {
    color: white;
  }
`;

const Context = styled.div`
  height: 50%;

  form {
    display: flex;
    flex-flow: column wrap;
  }

  button {
    width: 53px;
    height: 32px;
    border-radius: 7px;
    background: #e0e0e0;
    box-shadow: 27px 27px 53px #3a206b, -27px -27px 53px #703ecf;
    cursor: pointer;
  }
  input {
    width: 30vw;
    margin-bottom: 1.5em;
    height: 4vh;
    padding: 7px;
    border-radius: 8px;

    // :last-child {
    //   width: 3.5vw;
    //   align-self: end;
    // }

    @media screen and (max-width: 1000px) {
      width: 60vw;
    }
  }
`;

const Pemisah = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 6vh;
  justify-content: flex-end;

  input {
    width: 3vw;
    margin-left: 1vw;
    margin-top: 10px;
  }

  @media screen and (max-width: 1200px) {
    input {
      width: 42px;
      align-self: flex-end;
      margin-left: 3vw;
    }
  }
`;
