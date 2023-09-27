import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { MdUnfoldMore, MdStorage } from "react-icons/md";
import type { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

function AuthNavbar() {
  const { data: session } = useSession();
  const [openCollections, setOpenCollections] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const activeCollection = searchParams.get("collection")

  const router = useRouter();

  async function handleCollectionSelection(collectionName: string) {
    setOpenCollections(false);
    await router.push({
      pathname: router.pathname,
      query: { collection: collectionName },
    });
  }

  return (
    <div className="sticky z-10 border bg-transparent">
      <header className="mx-auto flex items-center justify-between px-6 py-4 md:container">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-medium text-gray-100">TCG Vault | </p>
          </div>
          <div className="relative text-gray-100">
            <CollectionSelection
              setOpenCollections={setOpenCollections}
              activeCollection={activeCollection}
            />
            {openCollections && (
              <CollectionSelectionModal
                activeCollection={activeCollection}
                handleCollectionSelection={handleCollectionSelection}
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* 
            TODO:
              Make it so when the users image is clicked it opens a modal
              opens
           */}
          <Image
            src={session?.user.image ? session?.user.image : ""}
            width={32}
            height={32}
            alt={`Picture of ${session?.user.image}`}
            className="rounded-full"
          />
          <button className="text-gray-100" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
}

export default AuthNavbar;
function CollectionSelection({
  setOpenCollections,
  activeCollection,
}: {
  setOpenCollections: Dispatch<SetStateAction<boolean>>;
  activeCollection: string | null;
}) {
  return (
    <div>
      <div
        className="flex w-56 cursor-pointer items-center justify-between rounded px-2 py-1 outline outline-gray-600 hover:bg-white/5"
        onClick={() => setOpenCollections((prev) => !prev)}
      >
        {activeCollection ? (
          <>{activeCollection}</>
        ) : (
          <p className="font-bold">Select a Collection</p>
        )}
        <MdUnfoldMore size={24} />
      </div>
    </div>
  );
}

function CollectionSelectionModal({
  activeCollection,
  handleCollectionSelection,
}: {
  activeCollection: string | null;
  handleCollectionSelection: (value: string) => void
}) {
  return (
    <div className="absolute top-10 flex w-full flex-col justify-center rounded border bg-neutral-950">
      <div className="border-b p-2">
        <p className="">Search</p>
      </div>
      <div className="border-b p-2">
        <div className=" flex flex-col gap-4">
          {/* set the collection on the url instead of use state */}
          <div
            className="flex items-center justify-between"
            onClick={() => handleCollectionSelection("name")}
          >
            <div className="flex items-center gap-3">
              <MdStorage />
              <p>Modal</p>
            </div>
            {activeCollection ? (
              <div className="text-gray-100">Checked</div>
            ) : (
              <></>
            )}
          </div>
          <p>Modal</p>
          <p>Modal</p>
        </div>
      </div>
      <div className="flex items-center p-2">
        <p className="">Create Store</p>
      </div>
    </div>
  );
}

/*
  overview
  category
  settings
  order
*/
