import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import { useState } from "react";
import CreateInvoiceModal from "@/components/modal/CreateInvoiceModal";
export function Invoice() {
  const [isFilterDropdown, setIsFilterDropdown] = useState(false);
  const toggleFilterDropdown = () => {
    setIsFilterDropdown(!isFilterDropdown);
  };
  return (
    <>
      <div className="flex items-center justify-between  mt-4 ">
        <div className="tracking-widest">
          <h3>Invoice Report</h3>
          <text className="text-gray-600">Manage Your Invoice Report</text>
        </div>
        <CreateInvoiceModal />
      </div>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" className="mb-8 p-6">
            <div className="flex justify-between items-center">
              {/* // left side filter dropdown */}
              <div className="relative">
                <button
                  onClick={toggleFilterDropdown}
                  className="flex items-center gap-2 border border-purple-100 rounded-lg p-2 hover:bg-purple-50"
                >
                  <img
                    src="https://static-00.iconduck.com/assets.00/filter-icon-256x256-zludyd2d.png"
                    alt="Filter icon"
                    className="w-6 h-6"
                  />
                  <span>Filter</span>
                </button>
                {isFilterDropdown && (
                  <div className="fixed z-50 mt-3 w-64 bg-white border border-gray-300 rounded-lg shadow-xl">
                    <div className="px-8 py-4">
                      <p className="font-semibold mb-2">Sort by:</p>
                      <div className="flex flex-col gap-2">
                        {[
                          "Default",
                          "Invoice Name",
                          "Date",
                          "Month",
                          "Invoice Number",
                          "Party Name",
                        ].map((label, index) => (
                          <label
                            key={index}
                            className="flex items-center justify-between gap-2"
                          >
                            <span>{label}</span>
                            <input
                              type="radio"
                              name="sort"
                              className="h-4 w-4"
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* // center search input box */}
              <div>
                <input
                  type="text"
                  placeholder="Search  by Name, invoice number or Date"
                  className="border-[1px] bg-gray-100 px-4 rounded-lg py-1 text-purple-200"
                />
              </div>
              {/* // Right side action buttons */}
              <div className="flex gap-2">
                <div>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-1868958-1583122.png?f=webp"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn-icons-png.freepik.com/256/4726/4726010.png?semt=ais_hybrid"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <img
                    src="https://icons.iconarchive.com/icons/avosoft/warm-toolbar/256/print-icon.png"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-refresh-reload-retry-loading-try-interface-again-4-13955.png?f=webp&w=256"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "sl",
                    "Date",
                    "PartyName",
                    "GSTNo",
                    "InvoiceNo",
                    "BillCost",
                    "CGST",
                    "SGST",
                    "Total",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[14px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {authorsTableData?.map((invoice, index, key) => {
                  // ({ Date, PartyName, GSTNo, InvoiceNo,BillCost,CGST,SGST,Total }, key,index) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={index}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {index + 1}
                        </div>
                      </td>
                      <td className={className}>{invoice?.Date}</td>
                      <td className={className}>{invoice?.PartyName}</td>
                      <td className={className}>{invoice?.GSTNo}</td>
                      <td className={className}>{invoice?.InvoiceNo}</td>
                      <td className={className}>{invoice?.BillCost}</td>
                      <td className={className}>{invoice?.CGST}</td>
                      <td className={className}>{invoice?.SGST}</td>
                      <td className={className}>{invoice?.Total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Invoice;
