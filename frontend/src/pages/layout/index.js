
import { getAllRequirements,addRequirement } from '@/api/requireApi';
import "./index.scss"
import React, { useEffect ,useState} from 'react';
import { Form, Input,Button ,Select ,FloatButton,Radio ,Card, Alert} from 'antd';
import { CheckOutlined } from '@ant-design/icons';




const Layout = ()=>{
  const [form] = Form.useForm(); // 创建 form 实例

  const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    console.log('提交成功', values);
    setFormData(values); 
  };

  const submit = async () => {
    try {
      const values = await form.validateFields(); // ✨ 这里才是正确的，等待表单数据
      console.log('点击FloatButton拿到的表单数据:', values);
  
      addRequirement(values).then(response => {
        
        console.log('Success:', response);
        setFormData({}); 
      }).catch(error => {
        console.log('Error:', error);
      });

    } catch (error) {
      console.log('表单校验失败', error);
    }
  };



    return <div className="layout">

<Card title="CHARGE (1 / 10)" variant="borderless">
    
       <Form
         id="myForm"
        form={form} 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        >
    <Form.Item
      label="CHARGE"
      layout="vertical"
      name="charge"
      rules={[{ required: true, message: 'Please input your charge!' }]}
    >
       <Radio.Group
    name="radiogroup"
    initialValues={1}
    options={[
      { value: 1, label: '0-500' },
      { value: 2, label: '500-1000' },
      { value: 3, label: '1000+' },
    ]}
  />
    </Form.Item>

  </Form>

 
  </Card>

  <FloatButton
      shape="circle"
      type="primary"
      style={{ insetInlineEnd: 94 }}
      icon={<CheckOutlined  />}
      onClick={submit}
    />

    </div>
}

export default Layout