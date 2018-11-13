import { log } from "./debug"
import { menuCreate } from "./business"

let test = [
    {
        id: "eb89efbd-94f4-4ab5-81af-e93c93e53826",
        pid: null,
        name: "企业信息管理",
        url:
            "/BusinessHandle/ModuleChooicer?fid=7670aa37-49be-4d15-9235-7d35c0385ad7"
    },
    {
        id: "0ddca924-d46b-41f0-8676-7d32627ba835",
        pid: "eb89efbd-94f4-4ab5-81af-e93c93e53826",
        name: "企业信息变更申请",
        url:
            "/BusinessHandle/ModuleChooicer?fid=02038bab-4a89-483e-afd1-6cf79523e60a"
    },
    {
        id: "98c7d4e0-299b-4c4f-a8c7-ba75c23033cf",
        pid: "eb89efbd-94f4-4ab5-81af-e93c93e53826",
        name: "从业人员权限管理",
        url:
            "/BusinessHandle/ModuleChooicer?fid=5162e90b-63bd-4985-bd79-4590e6d5628a"
    },
    {
        id: "d87bd9e7-ef06-4ef5-818c-0345a2fe3ea2",
        pid: "eb89efbd-94f4-4ab5-81af-e93c93e53826",
        name: "从业人员管理",
        url:
            "/BusinessHandle/ModuleChooicer?fid=6b3aa1a3-af17-49b7-899c-2518fe498f0b"
    },
    {
        id: "7416f150-2978-460a-9847-4270c5d42322",
        pid: "7416f150-2978-460a-9847-4270c5d42323",
        name: "企业信息变更业务查询",
        url:
            "/BusinessHandle/ModuleChooicer?fid=7670aa37-49be-4d15-9235-7d35c0385ad7"
    },
    {
        id: "7416f150-2978-460a-9847-4270c5d42323",
        pid: null,
        name: "企业信息变更业务查询粑粑",
        url:
            "/BusinessHandle/ModuleChooicer?fid=7670aa37-49be-4d15-9235-7d35c0385ad7"
    },
    {
        id: "46f8de44-b799-4aba-9c51-037855e6daee",
        pid: "eb89efbd-94f4-4ab5-81af-e93c93e53826",
        name: "企业基本信息",
        url:
            "/BusinessHandle/ModuleChooicer?fid=9d3609ca-6ff4-4973-b65c-b3737a1f16c4"
    }
]

log((menuCreate(test)))
