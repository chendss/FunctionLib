import { log } from "./debug"
import { toObjArray, formDataStructure } from "./business"

let companyNatureJson = [
    "私营",
    "国有",
    "股份制",
    "外商独资/办事处",
    "中外合资/合作",
    "上市公司",
    "事业单位",
    "政府机关",
    "非营利机构",
    "个人企业"
]

let test: Array<[string, string, any]> = [
    ["name", "公司名称", ""],
    ["nickname", "公司别称", ""],
    ["registrationNumber", "注册号", ""],
    ["logo-img", "公司logo", ""],
    ["companyNature-select", "公司名称", toObjArray(companyNatureJson)],
    ["number", "公司人数", 0],
    ["legal", "法人", ""],

    ["legalCard", "法人身份证", ""],
    ["legalPhone", "法人手机号", ""],
    ["websites", "公司网址", ""],
    ["introduction", "公司简介", ""],
    ["pictures", "公司图片", []],
    ["contacts", "联系人", ""],
    ["telephone", "联系电话", ""],

    ["email", "邮箱", ""],
    ["addresses-multipleSelect", "公司地址", {}],
    ["addressesDetail", "公司详细地址", ""],
    [
        "map-map",
        "公司地图",
        {
            lng: "",
            lat: ""
        }
    ]
]

let value = formDataStructure(test)
console.dir(value)
