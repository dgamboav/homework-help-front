import { Col, Row, Typography } from 'antd';

// Styles
import './styles/styles.less';


const { Title } = Typography;
function App() {
  return (
    <div>
      <Row justify={'center'}>
        <Col span={24}>
          <Title level={1} style={{ textAlign: 'center'}}>Homework Help</Title>
        </Col>
      </Row>
    </div>
  );
}

export default App;
