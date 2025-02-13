import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import FormItem from "antd/es/form/FormItem";
import Client_quotation_function from "./Client_quotation_function";
export default function Add_Quotation({
  isModalOpen,
  handleCancel,
  onClick,
  parameter,
  record={}
}) {
  const [part, setPart] = useState(record.part||"");
  const [year, setyear] = useState(record.year||"");
  const [make, setmake] = useState(record.make||"");
  const [model, setmodel] = useState(record.model||"");
  const [variant, setvariant] = useState(record.variant||"");
  const [pricing, setpricing] = useState(record.pricing||"");
  const [miles, setmiles] = useState(record.miles||"");
  const [stock, setstock] = useState(record.stocknumber||"");
  const [description, setdescription] = useState(record.desc||"");
  const [errors, seterrors] = useState({});
  const handleClick = async () => {
    let result = null;
    if (parameter == true) {
      result = await onClick({
        part,
        year,
        make,
        model,
        variant,
        pricing,
        miles,
        stock,
        description,
        setErrors:seterrors
      });
    } else {
      result = await onClick({setErrors:seterrors});
    }
    if (result) {
      setPart("");
      setyear("");
      setmake("");
      setmodel("");
      setvariant("");
      setpricing("");
      setmiles("");
      setstock("");
      setdescription("");
      handleCancel()
    }
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={1500}
        footer={[
          <Button key="ok" type="primary" onClick={handleClick}>
            Submit
          </Button>,
        ]}
      >
        <Form
          name="control-hooks"
          style={{
            maxWidth: 1100,
          }}
          className="flex flex-col mt-5"
        >
          <div className="flex">
            <Form.Item
              name="Part"
              label="Part"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Select
                value={part}
                onChange={(e) => {
                  setPart(e);
                }}
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <option value="Transmission">Transmission</option>
                <option value="Engine">Engine</option>
              </Select>
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.part ? errors.part : ""}
              </span>
            </Form.Item>

            <Form.Item
              name="Year"
              label="Year"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Select
                value={year}
                onChange={(e) => {
                  setyear(e);
                }}
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </Select>
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.year ? errors.year : ""}
              </span>
            </Form.Item>
          </div>

          <div className="flex">
            <Form.Item
              name="Make"
              label="Make"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Select
                value={make}
                onChange={(e) => {
                  setmake(e);
                }}
                placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                allowClear
              >
                <option value="Acura">Acura</option>
                <option value="Alfa">Alfa</option>
                <option value="AMC">AMC</option>
                <option value="Aston">Aston</option>
                <option value="Audi">Audi</option>
                <option value="Austin">Austin</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="Buick">Buick</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chevy">Chevy</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Datsun">Datsun</option>
                <option value="Dodge">Dodge</option>
                <option value="Eagle">Eagle</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Geo">Geo</option>
                <option value="GMC">GMC</option>
                <option value="Honda">Honda</option>
                <option value="Hummer">Hummer</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Infiniti">Infiniti</option>
                <option value="International">International</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="LandRover">LandRover</option>
                <option value="Lexus">Lexus</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Mazda">Mazda</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Mercury">Mercury</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Oldsmobile">Oldsmobile</option>
                <option value="Peugot">Peugot</option>
                <option value="Plymouth">Plymouth</option>
                <option value="Pontiac">Pontiac</option>
                <option value="Porsche">Porsche</option>
                <option value="Saab">Saab</option>
                <option value="Saturn">Saturn</option>
                <option value="Scion">Scion</option>
                <option value="Sterling">Sterling</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
                <option value="Yugo">Yugo</option>
              </Select>
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.make ? errors.make : ""}
              </span>
            </Form.Item>

            <Form.Item
              name="Model"
              label="Model"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Input
                value={model}
                onChange={(e) => {
                  setmodel(e.target.value);
                }}
              />
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.model ? errors.model : ""}
              </span>
            </Form.Item>
          </div>

          <div className="flex">
            <Form.Item name="Variant" label="Variant" className="w-[100%]">
              <Input
                value={variant}
                onChange={(e) => {
           
                  setvariant(e.target.value);
                }}
              />
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.variant ? errors.variant : ""}
              </span>
            </Form.Item>

            <Form.Item
              name="Price"
              label="Price"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Input
                value={pricing}
                onChange={(e) => {
                  setpricing(e.target.value);
                }}
              />
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.Price ? errors.Price : ""}
              </span>
            </Form.Item>
          </div>

          <div className="flex">
            <Form.Item
              name="Miles"
              label="Miles"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Input
                value={miles}
                onChange={(e) => {
                  setmiles(e.target.value);
                }}
              />
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.miles ? errors.miles : ""}
              </span>
            </Form.Item>

            <Form.Item
              name="Stock"
              label="Stock"
              rules={[
                {
                  required: true,
                },
              ]}
              className="w-[100%]"
            >
              <Input
                value={stock}
                onChange={(e) => {
                  setstock(e.target.value);
                }}
              />
              <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
                {errors?.stock ? errors.stock : ""}
              </span>
            </Form.Item>
          </div>

          <Form.Item
            name="Description"
            label="Description"
            className="w-[100%]"
          >
            <TextArea
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <span className="w-full h-4 text-red-500  transition-all duration-300 text-md ">
              {errors?.description ? errors.description : ""}
            </span>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
