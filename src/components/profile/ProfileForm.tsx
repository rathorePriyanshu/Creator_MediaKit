"use client";

import ProfileFields from "./ProfileFields";
import ProfileImageUpload from "./ProfileImageUpload";

export default function ProfileForm() {
    return (
        <section className="space-y-6">

            <ProfileImageUpload />

            <ProfileFields />

        </section>
    );
}