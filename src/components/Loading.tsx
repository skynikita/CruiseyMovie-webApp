import { Alert, Spin } from "antd"

const Loading = () => {
  return (
    <Spin style={{ marginTop: 40 }} tip='Loading...'>
      <Alert message='Movies are coming' type='info' />
    </Spin>
  )
}

export default Loading
