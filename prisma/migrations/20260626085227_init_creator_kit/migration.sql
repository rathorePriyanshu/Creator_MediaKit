-- CreateTable
CREATE TABLE "creator_kits" (
    "id" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "bio" TEXT,
    "profile_image_url" TEXT,
    "theme_color" VARCHAR(7) NOT NULL DEFAULT '#6366F1',
    "metrics" JSONB NOT NULL DEFAULT '[]',
    "rate_cards" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "creator_kits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "creator_kits_username_key" ON "creator_kits"("username");
