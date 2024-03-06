import styled from 'styled-components';

export const Root = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 padding: 20px;
 border: 1px solid #ccc;
 border-radius: 10px;
 background-color: #f9f9f9;
`;

export const Field = styled.div`
 display: flex;
 justify-content: flex-start;
 gap: 4px;
 align-items: center;
 font-size: 16px;
 color: #333;
`;

export const FieldLabel = styled.span`
 font-weight: bold;
`;

export const FieldValue = styled.span`
 color: #666;
`;
