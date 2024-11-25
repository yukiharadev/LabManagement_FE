import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchAllDevices } from "../../features/Devices/DeviceAction";
import { Button, Drawer, Label, Select, TextInput, Spinner } from "flowbite-react";
import { HiCog } from "react-icons/hi";
import api from "../../configs/axios.config.tsx";
import { GET_CATEGORY_URL } from "../../configs/Api.config.tsx";

interface Category {
    categoryId: number;
    categoryName: string;
}

const CategorySelect = ({
    categories,
    category,
    setCategory,
    loading,
}: {
    categories: Category[];
    category: number;
    setCategory: (value: number) => void;
    loading: boolean;
}) => {
    const renderedCategories = useMemo(
        () =>
            categories.map((cate) => (
                <option key={cate.categoryId} value={cate.categoryId}>
                    {cate.categoryName}
                </option>
            )),
        [categories]
    );

    return loading ? (
        <Spinner size="sm" />
    ) : (
        <Select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
            <option value={0}>Chọn Loại</option>
            {renderedCategories}
        </Select>
    );
};

const CreateDevice = () => {
    const dispatch = useDispatch();

    const [categories, setCategories] = useState<Category[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [deviceName, setDeviceName] = useState("");
    const [category, setCategory] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleClose = useCallback(() => setIsOpen(false), []);

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            setError("");

            const deviceData = { deviceName, categoryId: category };
            try {
                await api.post("/devices/create", deviceData);
                dispatch(fetchAllDevices() as never);
                handleClose();
            } catch (err) {
                console.error("Error posting device data:", err);
                setError("Không thể thêm thiết bị. Vui lòng thử lại.");
            } finally {
                setLoading(false);
            }
        },
        [deviceName, category, dispatch, handleClose]
    );

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await api.get(GET_CATEGORY_URL);
            setCategories(response.data);
        } catch (err) {
            console.error("Error fetching categories:", err);
            setError("Không thể tải danh mục. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <>
            <Button size="xs" onClick={() => setIsOpen(true)}>
                Thêm mới
            </Button>
            <Drawer
                open={isOpen}
                className="md:w-1/2 w-full"
                onClose={handleClose}
                position="right"
            >
                <Drawer.Header
                    title="Thêm thiết bị"
                    titleIcon={() => <HiCog className="w-6 h-6 mr-2" />}
                />
                <Drawer.Items>
                    <form className="w-full" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label value="Tên thiết bị" />
                                <TextInput
                                    type="text"
                                    placeholder="Tên thiết bị"
                                    required
                                    value={deviceName}
                                    onChange={(e) => setDeviceName(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label className="my-3" value="Loại" />
                                <CategorySelect
                                    categories={categories}
                                    category={category}
                                    setCategory={setCategory}
                                    loading={loading}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button
                                color="info"
                                className="ml-2"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Đang lưu..." : "Lưu"}
                            </Button>
                        </div>
                    </form>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default CreateDevice;
