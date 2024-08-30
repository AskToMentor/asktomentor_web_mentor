import React, { useState } from 'react';
import ConfirmationModal from '../Mentor-register/ConfirmationModal';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;

        setFormData({
            ...formData,
            termsAccepted: checked,
        });

        if (checked) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            ...formData,
            termsAccepted: false,
        });
    };

    return (
        <div className="bg-gray-900 p-10 rounded-lg text-white max-w-2xl mx-auto font-sans mt-[100px]">
            <span className="text-lg">User Information</span>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full p-4 my-3 bg-gray-800 rounded text-lg"
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full p-4 my-3 bg-gray-800 rounded text-lg"
            />
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-4 my-3 bg-gray-800 rounded text-lg"
            />
            <span className="text-lg">Security</span>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full p-4 my-3 bg-gray-800 rounded text-lg pr-14"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-6 bg-gray-800 p-0 m-0"
                >
                    {showPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                </button>
            </div>
            <div className="relative">
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full p-4 my-3 bg-gray-800 rounded text-lg pr-14"
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-6 bg-gray-800 p-0 m-0"
                >
                    {showConfirmPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                </button>
            </div>
            <div className="my-5 text-sm">
                <p className="text-teal-400">Password Must Contain:</p>
                <ul className="list-none pl-4">
                    <li>At least 8 characters</li>
                    <li>At least 1 symbol (!, #, ...)</li>
                    <li>At least 1 number</li>
                </ul>
            </div>
            <label className="flex items-center my-4 text-lg">
                <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                />
                <span>I have read and agreed to the Terms and Conditions</span>
                <span className="text-teal-400 ml-1">*</span>
            </label>
            <div className="mt-3 text-sm">
                This site is protected by reCAPTCHA and the Google
                <span className="text-teal-400"> "Privacy Policy"</span> and
                <span className="text-teal-400"> "Terms of Service"</span> apply
            </div>

            {showModal && <ConfirmationModal onClose={handleCloseModal} />}
        </div>
    );
};

export default SignUpForm;
